import { SEND_MESSAGE, FLUSH } from '../types/msg.types'
import DataType from '../../types/Data.type';

let toPush: boolean = true;
let idx: number = 0;

const msgReducer = (state: DataType[] = [], action: {coding: 'fact' | 'current', type: String, payload: any}) => {
    switch(action.type) {
        case FLUSH:
            return []
        case SEND_MESSAGE:
            switch(action.coding) {
                case 'fact':
                    return [...state, action.payload]
                case 'current':
                    if (toPush) {
                        toPush = false
                        idx = state.length
                        setTimeout(() => {
                            toPush = true
                        }, 1000)
                    }
                    const clone = state.slice()
                    clone[idx] = action.payload
                    return [...clone]
                default:
                    return state
            }
        default: 
            return state
    }
}

export default msgReducer;