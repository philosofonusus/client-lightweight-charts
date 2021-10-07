import {FLUSH} from '../types/msg.types'

const flushAll = () => {
    return {
        type: FLUSH
    }
}

export default flushAll