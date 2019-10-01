/**
 * Created by sudarshan on 14/12/17.
 */
import "./digit.css"
import React, { Component } from 'react';
import { digitPressed } from '../actions'
import {connect} from 'react-redux'
import {findDOMNode} from "react-dom" ;
import $ from "jquery"


class Digit extends Component {
    componentDidMount() {
        var el=findDOMNode(this.refs.toggle)
        $(el).css("background-color",this.props.color)
        $(el).css("color",this.props.font)
    }
    render() {
        return (
            <button  refs="toggle"onClick={()=> { this.props.digitClicked(this.props.number) }} className="btno" value="{this.props.number}">{this.props.number}</button>
        )
      
      
     
    }
}

function mapStateToProps() {
    return {

    }

}

function mapDispatchToProps(dispatch) {

    return {
        digitClicked : function (digit) {
            dispatch(digitPressed(digit));

        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Digit);