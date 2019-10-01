/**
 * Created by sudarshan on 14/12/17.
 */

import { operationClicked, digitClicked, resultClicked } from './helpers'

const initialState = { digit1 : '', digit2 : '', operation : '', result : 0, displayNumber :'digit1' };

export function reducer1(state = initialState, action) {
    var updatedState = {};

    switch (action.type){

        case 'OPERATION_PRESSED' :
            return operationClicked(state, action);
            break;

        case 'DIGIT_PRESSED' :
            return digitClicked(state, action);
            break;

        case 'DIGIT_PRESSED' :
            return resultClicked(state, action);
            break;

        default :
            return Object.assign({}, state);

    }

    return {};
}