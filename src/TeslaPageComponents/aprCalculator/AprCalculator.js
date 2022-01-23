import React, {useState, useEffect} from 'react'
// import ReactSwitch from 'react-switch';
import './aprCalculator.css'

const AprCalculator = () => {
    const [apr, setApr] = useState(0);
    const [balance, setBalance] = useState(0);
    const [interest, setInterest] = useState()

    const [toRight, setToRight] = useState(false)

    // const [seeapr, setSeeApr] = useState(false);
    // const display = seeapr ? 'block' : 'none';
    // const handleApr = nextApr => { setSeeApr(nextApr)}

    function creditAPRCalculator(){
        let APR = apr /100 
        let dailyPeriodicRate =  APR /365
        // let amount = 7000 
        let interestCharge = balance * 30 * dailyPeriodicRate
        // let interestCharge = avgDailyBalance * dailyPeriodic * period
        // let interestCharge = 7000 * 30 * 0.0004 = 84
        // let avgDailyBalance = (daily balance * days + daily balance * days) /30
        setInterest(interestCharge.toFixed(2))
    }

    useEffect(() => creditAPRCalculator(apr, balance));

    const changeStyle = () => {
        setToRight(!toRight)
        
    }

    

    return (
        <div>
            {/* <h2>Toggle to {`${seeapr?'Hide':'Show'}` } APR Calculator</h2>
                <ReactSwitch 
                    onChange={handleApr} 
                    checked={seeapr}
                    width = {68}
                    height = {40}
                    handleDiameter = {40}/>
                        <div style={{display}}> */}
                        <div className={toRight ? 'box2' : 'box'}> 
                        <h1>APR Calculator (30 days)</h1>
                            <div>
                                <p className='aprForm'>APR %</p>
                                <input  className='calculatorInputs'type='number' placeholder='enter APR' onChange={e => setApr(e.target.value)}/>
                                <p className='aprForm'>Balance</p>
                                <input  className='calculatorInputs'type='number' placeholder='enter balance' onChange={e => setBalance(e.target.value)}/>
                            </div>
                            <br/>
                            <div>
                                {/* <button className='calculatorButtons' onClick={() => creditAPRCalculator(apr, balance)}>Submit</button> */}
                                <h3>Your interested for 30 days is:</h3>
                                <h1> {`${interest === 0 ? '' : '$' + interest  }`}</h1>
                            </div>
                            <button className='moveButton' onClick={changeStyle}>move to passenger</button>
                        </div>
                           
            {/* </div>   */}
        </div>
    )
}
export default AprCalculator
