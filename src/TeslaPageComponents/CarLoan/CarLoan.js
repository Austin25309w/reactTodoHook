import {React, useState, useEffect} from 'react';
import './carLoan.css'

const CarLoan = () => {
    const[amount, setAmount] = useState(0);
    const[interest, setInterest] = useState(0);
    const[period, setPeriod] = useState(0);
    const[carLoan, setCarLoan] = useState();

    const[toRight, setToRight] = useState(false);
    const[format, setFormat] = useState();

    function loanCalculation(){
            let decimalRate = interest / 100;
            let monthRate = decimalRate / 12;
            let amountInterest = amount * monthRate;
            let plusOne = monthRate + 1;
            let byPeriod = Math.pow(plusOne, period);
            let byOne = 1 / byPeriod ;
            let oneSubtract = 1 - byOne;
            let finalAns = Math.round(amountInterest) / oneSubtract.toFixed(2) 
            setCarLoan(INTEGER_FORMATTER.format(finalAns.toFixed(2)));
    }

    const changeStyle = () => {
        setToRight(!toRight)
    }

    const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
        maximumFractionDigits:2,
    })

    // function callFormat(format){
        
    //     setFormat(INTEGER_FORMATTER.format(format))
    // }
    // useEffect(() => callFormat(amount))


    // useEffect(() => addComma(INTEGER_FORMATTER.format(com)))
    console.log(format, 'outside')

    return (
    <div className='car_loan'>
        <div className={toRight ? 'box2' : 'box' }>
            <h1>Car Loan</h1>
                <form >
                    <div className='carLoanField'>
                        <p >Loan Amount</p>
                        <input className='calculatorInputs' type='number' placeholder='amount' onChange={ e =>{ setAmount( e.target.value)  }}/>
                    </div>
                    <div className='carLoanField'>
                        <p>Interest rate (%)</p>
                        <input className='calculatorInputs' type='number' placeholder='rate' onChange={ e => setInterest(e.target.value)}/>
                    </div>
                    <div className='carLoanField'>
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
