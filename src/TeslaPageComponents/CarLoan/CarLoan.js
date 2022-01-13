import {React, useState} from 'react';
import './carLoan.css'
import ReactSwitch from 'react-switch';


const CarLoan = () => {
    const[amount, setAmount] = useState(0)
    const[interest, setInterest] = useState(0)
    const[period, setPeriod] = useState(0)
    const[carLoan, setCarLoan] = useState()

    const [seecarloan, setseeCarloan] = useState(false);
    const visibility = seecarloan ? 'visible' : 'hidden';
    const handleCarloan = nextChecked => { setseeCarloan(nextChecked)}


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

    function addComma(x){
        let comma = x.toString().split(".");
        comma[0] = comma[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return comma.join('.') 
    }

    function totalGasPriceCalculator(){

    }


    // 6.74%, 36mo, $10,000 / 311.11

    return (
    <div className='car_loan'>
        <h2>Toggle to {`${seecarloan?'Hide':'Show'}` } CARLOAN Calculator</h2>
            <ReactSwitch 
                onChange={handleCarloan} 
                checked={seecarloan}
                width = {68}
                height = {40}
                handleDiameter = {40}/>
                    <div style={{visibility}}>
                    <h1>CarLoan</h1>
                        <form >
                            <div>
                                <p >Loan Amount</p>
                                <input type='number' placeholder='amount' onChange={ e => setAmount(e.target.value)}/>
                            </div>
                            <div>
                                <p>Interest rate (%)</p>
                                <input type='number' placeholder='rate' onChange={ e => setInterest(e.target.value)}/>
                            </div>
                            <div>
                                <p>Loan Period (months)</p>
                                <input type='number' placeholder='month' onChange={ e => setPeriod(e.target.value)}/>
                            </div>
                        </form>
                        <br/>
                        <div>
                            <button onClick={ () =>loanCalculation(amount, interest, period)}>submit </button>
                            <span><h4>Monthly Payments</h4> <h1>${carLoan}</h1></span>
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
