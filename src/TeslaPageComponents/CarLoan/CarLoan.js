import React from 'react';
import './carLoan.css'

const CarLoan = () => {
    return (<div className='car_loan'>
        <h1>CarLoan</h1>
        <div>
        <p>Loan Amount</p>
        <input></input>
        </div>
        <div>
        <p>Interest rate (%)</p>
        <input></input>
       </div>
       <div>
        <p>Loan Period (months)</p>
        <input></input>
       </div>

        <div>
            <h4>Total cost of car loan</h4>
            {/* <h4>{this.state.carLoan}</h4> */}
        </div>

        <div>
            <h4>Monthly Payments</h4>
            {/* <h4>{this.state.monthlyPayments}</h4> */}
        </div>
        
    </div>)

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

