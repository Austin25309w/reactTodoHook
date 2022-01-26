/* eslint-disable default-case */
import './Calculator-Styles.css';
import { useReducer, useState } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import Mortgage from '../Mortgage/Mortgage';
import CarLoan from '../CarLoan/CarLoan';
import AprCalculator from '../aprCalculator/AprCalculator';
import ReactSwitch from 'react-switch';


export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate',
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return {
                    ...state,
                    currentOperand: payload.digit,
                    overwrite: false,
                }
            }
            if(payload.digit === "0" && state.currentOperand === "0") {
                return state
            } 
            if(payload.digit === "." && state.currentOperand.includes(".")){
                return state
            }
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`, 
            }
       
        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand == null && state.previousOperand == null) {
                return state
            }

            if(state.currentOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                }
            }

            if (state.previousOperand == null){
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null
            }

        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite) {
                return {
                    ...state,
                    overwrite: false,
                    currentOperand: null
                }
            }
            if(state.currentOperand == null) return state
            if(state.currentOperand.length === 1){
                return {...state, currentOperand: null}
            }
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0,-1)
            }
                
    
        

        case ACTIONS.EVALUATE:
            if (
                state.operation == null ||
                state.currentOperand == null ||
                state.previousOperand == null
            ) {
                return state
            }

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                operation: null,
                currentOperand:evaluate(state)
            }
        }
} 

function evaluate({currentOperand, previousOperand, operation}){
    const prev = parseInt(previousOperand)
    const current = parseFloat(currentOperand)
    if(isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation){
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
        case "*":
            computation = prev * current
            break
        case "÷":
            computation = prev / current
            break
    }
    return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits:0,
})

function formatOperand(operand) {
    if(operand == null) return
    const [integer, decimal] = operand.split(".")
    if (decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function Calculator() {
    const [{ currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

    const [seeCal, setseeCal] = useState(false);
    const display = seeCal ? 'block' : 'none';
    const handleCarloan = nextChecked => { setseeCal(nextChecked)}

    const [toRight, setToRight] = useState(false)

    const changeStyle = () => {
        setToRight(!toRight)
    }

    return (
        <div className='calculator_container'>
            {/* <h2>Toggle to {`${seeCal?'Hide' :'Show'}` } Calculator</h2>
                        <ReactSwitch 
                            onChange={handleCarloan} 
                            checked={seeCal}
                            width = {68}
                            height = {40}
                            handleDiameter = {40}/>
                            <div style={{display}}> */}
                            <div className={toRight ? 'calbox2': 'calbox'}>
                                <div className="calculator-grid">
                                    <div className="output">
                                        <div className="previous-operand">{formatOperand(previousOperand)}{operation}</div>
                                        <div className="current-operand">{formatOperand(currentOperand)}</div>
                                        </div>
                                        <button className="span-two"
                                            onClick= {()=> dispatch({type:ACTIONS.CLEAR})}>AC</button>
                                        <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
                                        <OperationButton operation="÷" dispatch={dispatch}/>
                                        <DigitButton digit="7" dispatch={dispatch}/>
                                        <DigitButton digit="8" dispatch={dispatch}/>
                                        <DigitButton digit="9" dispatch={dispatch}/>
                                        <OperationButton operation="*" dispatch={dispatch}/>
                                        <DigitButton digit="4" dispatch={dispatch}/>
                                        <DigitButton digit="5" dispatch={dispatch}/>
                                        <DigitButton digit="6" dispatch={dispatch}/>
                                        <OperationButton operation="-" dispatch={dispatch}/>
                                        <DigitButton digit="1" dispatch={dispatch}/>
                                        <DigitButton digit="2" dispatch={dispatch}/>
                                        <DigitButton digit="3" dispatch={dispatch}/>
                                        <OperationButton operation="+" dispatch={dispatch}/>
                                        <DigitButton digit="." dispatch={dispatch}/>
                                        <DigitButton digit="0" dispatch={dispatch}/>
                                        <button 
                                            className="span-two" 
                                            onClick= { ()=> dispatch({type: ACTIONS.EVALUATE })}
                                        >=</button>
                                </div>
                                <button className='moveButton' onClick={changeStyle}>{toRight ? '< Driver <': '> Passenger >'}</button>
                            </div>
                            
                            {/* </div> */}

        {/* carloan calculator */}
        {/* <div className='carloan_calculator'>
                    <CarLoan />
        </div>
        <div className='carloan_calculator'>
                    <AprCalculator />
        </div> */}
            
            
            
        </div>
  
    )
}

export default Calculator


// https://www.youtube.com/watch?v=DgRrrOt0Vr8&t=73s