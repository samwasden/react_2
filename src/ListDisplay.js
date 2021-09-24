import React, {Component} from 'react'

class ListDisplay extends React.Component {
    constructor() {
        super()
        this.state = {
            listArray: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
        }
    }
    render() {
        let listDislay = this.state.listArray.map((word, index) => {
            return <h2 key={index}>{word}</h2>
        });

        return <div className="App">{listDislay}</div>
    }
}

export default ListDisplay