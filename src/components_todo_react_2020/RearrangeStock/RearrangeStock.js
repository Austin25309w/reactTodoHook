import React, { Component } from 'react';

export default class RearrangeStock extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: 0,
            size: 0,
            newPrice: 0,
            newSize: 0
        }

    }
    handleChange = (e) => {
        this.setState({
             [e.target.name]: e.target.value
        })
    }

    oldStockPrice = () => {
        let initialPrice = this.state.price * this.state.size
        return initialPrice;
    }

    newStockPrice = () => {
        let initialPrice = this.state.newPrice * this.state.newSize
        return initialPrice;
    }

    totalStockSize = () => {
        return parseInt(this.state.newSize) + parseInt(this.state.size)
    }

    totalStockPrice = () => {
        console.log(this.newStockPrice(), this.oldStockPrice(), this.totalStockSize())
        let finalPrice = parseInt(this.newStockPrice() + this.oldStockPrice()) / parseInt(this.totalStockSize())
        console.log('typeof',typeof finalPrice)
        return finalPrice
    }



    handleSubmit = (e) =>{
        e.preventDefault()
    }




    render(){
        return(<div className= "rearrange">
                <h1>Rearrange Stock</h1>
                <div>
                    <div>
                        <form>
                            <input placeholder='current position price'
                            className="input"
                            name= "price"
                            onChange ={this.handleChange}/>

                            <input placeholder='current position size'
                            className="input"
                            name = "size"
                            onChange = {this.handleChange}/>
                        
                            <p>Current total price ${ parseInt(this.oldStockPrice(this.state.price)).toLocaleString()}</p>
                        
                            <p>------------</p>

                            <input placeholder='new position price'
                            className="input"
                            name = 'newPrice'
                            onChange = {this.handleChange}/>

                            <input placeholder='new position size'
                            className="input"
                            name = 'newSize'
                            onChange = {this.handleChange}/>
                            <p>rearrange price ${ parseInt(this.newStockPrice(this.state.newPrice)).toLocaleString()}</p>
                        </form>

                            <p>------------</p>



                        <p>New total price  ${ isNaN(this.totalStockPrice().toLocaleString()) ? "" : this.totalStockPrice().toLocaleString() } and size  { this.totalStockSize() === 0 ? "Nothing" : this.totalStockSize()  }</p>
                    </div>
                </div>
        </div>
        )
    }
}