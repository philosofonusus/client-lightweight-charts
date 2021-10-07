import React, {useState, useEffect} from 'react';
import Chart from './Chart';
import {useSelector, useDispatch} from 'react-redux'
import DataType from '../types/Data.type'
import dataConnection from '../utils/dataSubscribe';
import {createChart} from 'lightweight-charts';
import flushAll from '../redux/actions/flush.action'

import {RootState} from '../redux/store'

const chart = createChart(document.getElementById("chart")!, {"layout":{"backgroundColor":"#fff","textColor":"#696969","fontSize":12,"fontFamily":"Calibri"}})
chart.applyOptions({
    grid: {
        vertLines: {
            visible: false,
        },
        horzLines: {
            visible: false,
        },
    },
});
const ChartComponent = () => {
    const data: DataType[] = useSelector((state: RootState) => state.data)
    const [isSpline, setIsSpline] = useState<Boolean>(false)
    const [type, setType] = useState<'current' | 'fact'>('current');
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(flushAll())
        dataConnection(type)
    }, [type])

    return (<>
            <div>
                <button onClick={() => setType(type === 'current' ? 'fact' : 'current')}>
                    {type === 'current' ? 'fact' : 'current'}
                </button>
                <button onClick={() => setIsSpline(!isSpline)}>
                    {isSpline ? 'spline' : 'nospline'} 
                </button>
            </div>
        <Chart chart={chart} spline={isSpline} data={data}/>
        </>
    )
}

export default ChartComponent;