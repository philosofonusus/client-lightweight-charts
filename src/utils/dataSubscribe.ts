import socket from '../connection'
import socketSubscribe from './socketSubscribe'
import * as socketActions from '../socketActions'
import { store } from '../redux/store'

import sendMessage from '../redux/actions/sendMessage.action';

const dataSubscriber = (coding: 'fact' | 'current') => {
    socket.onmessage = event => {
        const data = JSON.parse(event.data)
        socketSubscribe(data)
        if(data.name === socketActions.candleGenerated) {
            //@ts-ignore
            store.dispatch(sendMessage(data.msg, coding))
        }
    }
}

export default dataSubscriber;