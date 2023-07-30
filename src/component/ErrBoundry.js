import React, { Component } from "react";

export default class ErrBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = { hasErr: false };
    }
    static getDerivedStateFromError(props) {
        console.log("inside  getDerivedStateFromError")  ;
        return { hasErr: true };
    }
    render() {
        if (this.state.hasErr) {
        console.log("inside  fallback ")  

            return this.props.fallback
        }
        return this.props.children
    }
}