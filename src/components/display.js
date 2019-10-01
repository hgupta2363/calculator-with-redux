/**
 * Created by sudarshan on 14/12/17.
 */

import React, { Component } from 'react';
import "./display"


export default class Display extends Component {

    render() {
        return (
            <div id="display"><span id="displayTxt">{this.props.result}</span></div>
        )

    }
}