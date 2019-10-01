import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/display'
import Digit from './components/digit'
import Operation from './components/operation'
import {connect} from 'react-redux'
import { Button,ButtonGroup } from 'reactstrap';
import Scientific from './components/scietific'
import { generateKeyPair } from 'crypto';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            result: 'test',
            scientificModeOn:false,
            color:"gray",
            font :"black"
        }
        this.toggleMode=this.toggleMode.bind(this)
        this.dark=this.dark.bind(this)
    }

    calculate=()=>{
        let result = 'result';
        this.setState({result:result});
    }
     toggleMode(){
         console.log("test")
        this.setState({scientificModeOn:true})
    }
    dark(){
        
    }
    light(){
        
    }

  render() {
    return (
        <div>
          
   
            <div className="container" class="cont" >
           <div className="row">
           <ButtonGroup className="group">
           <Button color="primary" onClick={this.dark()}>Dark Theme</Button>
        <Button color="secondary" onClick={this.light()}>Light Theme</Button>
        </ButtonGroup>
           </div>
            <div className="row" className="display">
        <Display result={this.props.displayNumber} />
        
        </div>
        <div class="row no-gutters">
        
        <div className="col-3" class="button">
          <Digit number="1" color={this.state.color} font={this.state} />
          </div>
          <div className="col-3 ">
          <Digit number="2" />
          </div>
          <div className="col-3 ">
          <Digit number="3" />
          </div>
          <div className="col-3" className="op">
          <Operation operation="+"/>
          </div>
         
          </div>
      
          <div class="row no-gutters">
          <div className="col-3">
          <Digit number="4" />
          </div>
          <div className="col-3">
          <Digit number="5" />
          </div>
          <div className="col-3">
          <Digit number="6" />
          </div>
          <div className="col-3" className="op">
          <Operation operation="-"/>
          </div>
          </div>
     
          <div class="row no-gutters ">
          <div className="col-3">
          <Digit number="7" />
          </div>
          <div className="col-3">
          <Digit number="8" />
          </div>
          <div className="col-3">
          <Digit number="9" />
          </div>
          <div className="col-3" className="op">
          <Operation operation="/"/>
          </div>
          </div>
          <div class="row no-gutters">
          <div className="col-3">
          <Digit number="0" />
          </div>
          <div className="col-3">
            <Operation operation="AC"/>
            </div>
            <div className="col-3">
            <Operation operation="=" calculate={this.calculate}/>
            </div>
            <div className="col-3" className="op">
            <Operation operation="*"/>
            </div>
            </div>
            <Button onClick={this.toggleMode} color="secondary" size="lg" block >Scientific Mode</Button>

            <Scientific scientificModeOn={this.state.
scientificModeOn} />
      </div>
        
        </div>
    );
  }
}

function mapStateToProps(state) {

    return {
        displayNumber : state.reducer1[state.reducer1.displayNumber]
    }

}

function mapDispatchToProps(dispatch) {

    return {

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
