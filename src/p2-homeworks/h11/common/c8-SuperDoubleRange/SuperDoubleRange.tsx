import React from 'react'
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number
    max: number
    step: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step
    }
) => {
    // сделать самому, можно подключать библиотеки


    const onChangeHandler = (event: any, value: any) => {
        onChangeRange && onChangeRange(value)
    }

    return (
        <>
            <Slider value={value} onChange={onChangeHandler} step={step} min={min} max={max} style={{width: '115px', marginLeft: '10px', marginRight: '10px'}}/>
        </>
    )
}

export default SuperDoubleRange
