/**
 * Created by sudarshan on 14/12/17.
 */

export function operationClicked(state, action) {

    if(action.operation === '='){
     if(state.operation==="square")
     {
     state.operation="**"
     state.digit2="2"
     }
     if(state.operation==="root")
     {
     state.operation="**"
     state.digit2="0.5"
     }
     if(state.operation==="+/-")
     {
         state.operation="*"
         state.digit2="-1"
         console.log("tr")
         console.log(state.digit1)
     }
       
        state.result = eval(state.digit1 + state.operation + state.digit2);
        state.displayNumber = 'result';
        
        
       


    } else if(action.operation === 'AC'){
        state = { digit1 : '', digit2 : '', operation : '', result : 0, displayNumber :'result' };
    }
 else {
      
        if(state.digit2){
            console.log("tpo")
            if(state.operation=="square")
            {
                state.operation="**"
                state.digit2="2"
            }
        state.result = eval(state.digit1 + state.operation + state.digit2);
            state.digit1 = state.result;
            state.displayNumber = 'digit1';
            state.digit2 = '';
        }
     
        state.operation = action.operation;
        console.log(state.operation)
    }

    return Object.assign({}, state);
}

export function digitClicked(state, action) {

    if(!state.operation){
        state.digit1 = state.digit1 + action.digit;
        state.displayNumber = 'digit1';
    } else {
        state.digit2 = state.digit2 + action.digit;
        state.displayNumber = 'digit2';
    }

    return Object.assign({}, state);
}

export function resultClicked(state, action) {
    return Object.assign({}, state);
}