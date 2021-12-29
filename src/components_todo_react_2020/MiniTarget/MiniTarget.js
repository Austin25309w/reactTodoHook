import React from 'react';
import Count from './Count'

class MiniTarget extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    openMenu = () => document.querySelector(".sidebar").classList.toggle("open");

    render(){
        return <div className= "miniTarget">
                    <div className="say">
                        <div className="item">hi</div>
                        <div className="item">hi</div>
                        <div className="item">hi</div>
                    </div>
                    <h1>MiniTarget</h1>
                    <button onClick={this.openMenu}>&#9776;</button>
                        <div className="sidebar">
                            {/* <button className="sidebar-close-button" onClick={this.closeMenu}>X</button> */}
                            <ul className="categories">
                                <li>e</li>
                                <li>f</li>
                                <Count />
                            </ul>
                        </div>
                </div>
    }
}
export default MiniTarget