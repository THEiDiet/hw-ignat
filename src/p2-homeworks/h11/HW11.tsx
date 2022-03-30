import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.scss'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)
  const [values, setValues] = useState<[number, number]>([value1, value2])
  // const values:[number,number] = [value1,value2]
  const onFirstValueChange = (value: number) => {
    setValue1(value)
  }
  const onValuesChange = (values: [number, number]) => {
    setValue1(values[0])
    setValue2(values[1])
  }
  useEffect(() => {
    setValues([value1, value2])
  }, [value1, value2])
  return (
    <div>
      <span className={c.hw__title}>homeworks 11</span>
      <SuperRange onChangeRange={onFirstValueChange} value={value1}
      />

      <SuperDoubleRange values={values} onChangeRange={onValuesChange}
                        min={'0'} max={'100'}
      />
    </div>
  )
}

export default HW11
