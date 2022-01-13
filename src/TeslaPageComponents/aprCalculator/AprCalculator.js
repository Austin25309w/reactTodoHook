import {React, useState} from 'react'
import ReactSwitch from 'react-switch';
import './aprCalculator.css'

const AprCalculator = () => {
    const [apr, setApr] = useState(0);
    const [balance, setBalance] = useState(0);
    const [interest, setInterest] = useState()

    const [seeapr, setSeeApr] = useState(false);
    const visibility = seeapr ? 'visible' : 'hidden';
    const handleApr = nextApr => { setSeeApr(nextApr)}

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
    return (
        <div>
            <h2>Toggle to {`${seeapr?'Hide':'Show'}` } APR Calculator</h2>
                <ReactSwitch 
                    onChange={handleApr} 
                    checked={seeapr}
                    width = {68}
                    height = {40}
                    handleDiameter = {40}/>
                        <div style={{visibility}}>
                            <h1>APR Calculator (30 days)</h1>
                            <div>
                                <span className='aprForm'>APR %</span>
                                <input  className='aprForm'type='number' placeholder='enter APR' onChange={e => setApr(e.target.value)}/>
                                <span className='aprForm'>Balance</span>
                                <input  className='aprForm'type='number' placeholder='enter balance' onChange={e => setBalance(e.target.value)}/>
                            </div>
                            <br/>
                            <br/>
                            <div>
                                <button onClick={() => creditAPRCalculator(apr, balance)}>Submit</button>
                                <h3>Your interested for 30 days is:</h3>
                                <h1> ${interest}</h1>
                            </div>
            </div>  
        </div>
    )
}
export default AprCalculator
