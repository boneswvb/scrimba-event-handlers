import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.doubleCount = this.doubleCount.bind(this)
        this.minTen = this.minTen.bind(this)
        this.divideTwo = this.divideTwo.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)


    }
    
    handleClick() {
        this.setState(
            (prevState) => {
                return(
                   {count: prevState.count + 1 }
                )
            }
        )
    }
    
    doubleCount() {
        this.setState(
            (prevState) => {
                return (
                    {count: prevState.count * 2}
                )
            }
        )
    }
    
    minTen() {
        this.setState(
            (prevState) => {
                return(
                    { count: prevState.count - 10 }
                )
            }
        )
    }
    
    divideTwo() {
        this.setState(
            (prevState) => {
                return(
                    { count: prevState.count / 2 }
                )
            }
        )
    }

    onMouseOver() {
         console.log("Hover is working")
    }
    
    render() {
        return (
            <div>
                <h1 onMouseOver={ this.onMouseOver }>{this.state.count}</h1>
                <button onClick={ this.handleClick }>Change!</button>
                <button onClick={ this.doubleCount }>Double!</button>
                <button onClick={ this.minTen }>Min ten!</button>
                <button onClick={ this.divideTwo }>Divide two!</button>
            </div>
        )
    }
}

export default App
