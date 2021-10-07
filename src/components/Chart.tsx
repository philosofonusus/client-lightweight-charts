import React, {useState, useEffect} from 'react';
import DataType from '../types/Data.type';
import { IChartApi } from 'lightweight-charts';


const AreaChart: React.FC<{
    data: any | DataType, 
    spline: Boolean,
    chart: any | IChartApi
}> = ({data, spline, chart}) => {
    const [areaOptions, setAreaOptions] = useState({isSpline: spline, lineWidth: 3, lineStyle: 0, lineJoin: 0, lineType: 0, lineColor: '#549acb', topColor: '#fff', bottomColor: '#fff'})
    const [areaSeries, setAreaSeries] = useState(chart.addAreaSeries({...areaOptions}))

    useEffect(() => {
        setAreaSeries(chart.addAreaSeries({...areaOptions}))
        setAreaOptions({...areaOptions, isSpline: spline})
    }, [spline])
    useEffect(() => {
        areaSeries.setData(data)
    }, [data])

    return(
        <></>
    )
}

export default AreaChart;