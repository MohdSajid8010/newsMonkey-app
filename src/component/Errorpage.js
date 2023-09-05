import React from "react"

export default class Errorpage extends React.Component {
    render() {
        return <div>
            <h1>Oops! You Pick Wrong Route</h1>
            <a href='/'  className="btn btn-primary">Back to Home</a>
        </div>
    }
}


