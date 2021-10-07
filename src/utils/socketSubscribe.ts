import socket from '../connection'
import * as socketActions from '../socketActions'

const socketSubscribe = (data: any) => {
    if(data.name === socketActions.authenticated) {
        socket.send("{\"name\":\"subscribeMessage\",\"request_id\":\"s_193\",\"local_time\":22886,\"msg\":{\"name\":\"candle-generated\",\"params\":{\"routingFilters\":{\"active_id\":1,\"size\":1}}}}");
    }
}

export default socketSubscribe;