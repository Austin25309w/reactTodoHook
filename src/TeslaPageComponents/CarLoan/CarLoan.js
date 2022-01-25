import {React, useState, useEffect} from 'react';
import './carLoan.css'
import ReactSwitch from 'react-switch';


const CarLoan = () => {
    const[amount, setAmount] = useState(0);
    const[interest, setInterest] = useState(0);
    const[period, setPeriod] = useState(0);
    const[carLoan, setCarLoan] = useState();

    const[toRight, setToRight] = useState(false);
 

    const[com, setCom] = useState(0)

    // const [seecarloan, setseeCarloan] = useState(false);
    // const display = seecarloan ? 'block' : 'none';
    // const handleCarloan = nextChecked => { setseeCarloan(nextChecked)}

    function loanCalculation(){
            let decimalRate = interest / 100;
            let monthRate = decimalRate / 12;
            let amountInterest = amount * monthRate;
            let plusOne = monthRate + 1;
            let byPeriod = Math.pow(plusOne, period);
            let byOne = 1 / byPeriod ;
            let oneSubtract = 1 - byOne;
            let finalAns = Math.round(amountInterest) / oneSubtract.toFixed(2) 
            setCarLoan(finalAns.toFixed(2));
    }



    function addComma(){
        // let comma = com.toString().split(".");
        // comma[0] = comma[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // return comma.join('.')
        let a = com.toLocaleString('en')
        setCom(a) 
    }

    useEffect(() => addComma(com))

    const changeStyle = () => {
        setToRight(!toRight)
    }


    return (
    <div className='car_loan'>
        {/* <h2>Toggle to {`${seecarloan?'Hide' :'Show'}` } CARLOAN Calculator</h2>
            <ReactSwitch 
                onChange={handleCarloan} 
                checked={seecarloan}
                width = {68}
                height = {40}
                handleDiameter = {40}/>
                    <div style={{display}}> */}
                <div className={toRight ? 'box2' : 'box' }>
                    <h1>CarLoan</h1>
                            <form >
                                <div>
                                    <p >Loan Amount</p>
                                    <input className='calculatorInputs' type='text' placeholder='amount' onChange={ e =>{ setCom(e.target.value); setAmount(e.target.value);  }}/>
                                </div>
                                <div>
                                    <p>Interest rate (%)</p>
                                    <input className='calculatorInputs' type='number' placeholder='rate' onChange={ e => setInterest(e.target.value)}/>
                                </div>
                                <div>
                                    <p>Loan Period (months)</p>
                                    <input className='calculatorInputs' type='number' placeholder='month' onChange={ e => setPeriod(e.target.value)}/>
                                </div>
                            </form>
                            <br/>
                            <div>
                                <button className='calculatorButtons' onClick={ () =>loanCalculation(amount, interest, period)}>submit </button>
                                <span><h4>Monthly Payments</h4> <h1>{`${carLoan === undefined ? '' : '$' + carLoan  }`}</h1></span>
                                <div>
            <button className='moveButton' onClick={changeStyle}>{toRight ? '< Driver <': '> Passenger >'}</button>
            
        </div>
                            </div>
                </div>
                   
                    {/* </div>     */}
        {/* <div className={toRight}>
               <h1>black</h1>        
        </div> */}

                  
        
    </div>
    )
}

export default CarLoan


// 1. divide interest rate by 100 # 3.11 x 100 = 0.0311
// 2. divide the interest rate by 12  # 0.0311 / 12 = 0.0025
// 3. Multiple the number by the pronciple amount # 25,000 x 0.0025 = 62.5 
// 4. add 1 to the interest $ 1 + 0.0025 = 1.0025
// 5. take the number raise the power of months # 1.0025^60 = 1.16
// 6. use 1 to divide 1.16 = 0.86
// 7. subtract this number from 1 # 1 - 0.86 = 0.14
// 8. divide the number step to the number step 7 # 62.5 / 0.14 = 446.42


    // function totalGasPriceCalculator(){}

    // function stockPrice {}
