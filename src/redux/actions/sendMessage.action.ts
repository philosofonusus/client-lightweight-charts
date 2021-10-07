import DataType from '../../types/Data.type';
import {SEND_MESSAGE} from '../types/msg.types';

const sendMessage = (message: DataType, coding: 'fact' | 'current') => {
    return {
        type: SEND_MESSAGE,
        coding,
        payload: {...message, value: message.bid, time: message.at},
    }
}

export default sendMessage;