import React, {
  FC,
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useRef,
  useState, useEffect, useCallback
} from 'react'
import s from './superDoubleRange.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
  onChangeRange?: (value: [number, number]) => void
  values?: [number, number]
  // min, max, step, disable, ...
}

const SuperDoubleRange: FC<SuperDoubleRangePropsType> = (props) => {

  const {onChangeRange, values, className, min, max, ...rest} = props
  const minValue = values ? values[0] : 0
  const maxValue = values ? values[1] : 100
  const minValueRef = useRef(null)
  const maxValueRef = useRef(null)
  const rangeRef = useRef(null)

  const onHandleMinValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.currentTarget.value, maxValue - 1)
    e.currentTarget.value = value.toString()
    onChangeRange && onChangeRange([value, maxValue])
  }

  const onHandleMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.currentTarget.value, minValue + 1)
    onChangeRange && onChangeRange([minValue, value])
  }

  const minClassName = `${s.thumbRange} ${s.thumbRangeIndex3} ${values && (values[0] > values[1] - 10) ? s.thumbRangeIndex5 : ''}`
  const maxClassName = `${s.thumbRange} ${s.thumbRangeIndex4}`

  const getPercent = useCallback((value) => {
    // @ts-ignore
    return Math.round(((value - min) / (max - min)) * 100)
  }, [min, max])

  useEffect(() => {
    if (maxValueRef.current) {
      const minPercent = getPercent(minValue)
      // @ts-ignore
      const maxPercent = getPercent(+maxValueRef.current.value)

      if (rangeRef.current) {
        // @ts-ignore
        rangeRef.current.style.left = `${minPercent}%`
        // @ts-ignore
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minValue, getPercent])

  useEffect(() => {
    if (minValueRef.current) {
      // @ts-ignore
      const minPercent = getPercent(+minValueRef.current.value)
      const maxPercent = getPercent(maxValue)

      if (rangeRef.current) {
        // @ts-ignore
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxValue, getPercent])

  useEffect(() => {
    // @ts-ignore
    console.log(rangeRef.current.style.width)
    console.log({min: minValue, max: maxValue})
  }, [minValue, maxValue])

  return (
    <div className={s.range}>
      <div className={s.slider}>
        <div className={s.sliderTrack}/>
        <div className={s.sliderRange} ref={rangeRef}/>
      </div>
      <div className={s.thumbRangeContainer}>
        <span className={s.lowValue}>{minValue}</span>
        <input type="range" min={min} max={max} ref={minValueRef} value={minValue}
               onChange={onHandleMinValueChange} className={minClassName}{...rest}/>
      </div>
      <div className={s.thumbRangeContainer}>
        <label htmlFor={'max'} className={s.highValue}>{maxValue}</label>
        <input type="range"
               min={min}
               max={max}
               id={'max'}
               ref={maxValueRef}
               value={maxValue}
               onChange={onHandleMaxValueChange}
               className={maxClassName}
               {...rest}
        />
      </div>

      <div className={s.values}>
        <div className={s.minValue}>{min}</div>
        <div className={s.maxValue}>{max}</div>
      </div>
    </div>
  )
}

export default SuperDoubleRange
