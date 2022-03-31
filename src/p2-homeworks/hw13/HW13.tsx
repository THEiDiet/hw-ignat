import React, { FC, ReactElement, useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import MyCheckbox from '../h4/common/MyCheckbox/MyCheckbox'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'
import { requestAPI } from './api'

const Hw13: FC = (): ReactElement => {
  const [isChecked, setIsChecked] = useState(false)
  const [response, setResponse] = useState<Response | null>(null)
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }
  const handleOnClick = async () => {
    try {
      const res:any = await requestAPI.request({success: isChecked})
      const data = await res.json()
      if(res.status !== 500){
        setResponse(data.info)
      }else {
        throw data
      }
    } catch (error: any) {
      const e = error ? error.errorText : error.message
      setResponse(e)
    }
  }
  return (
    <div className={c.container}>
      <SuperButton onClick={handleOnClick}>Send</SuperButton>
      <MyCheckbox isChecked={isChecked} onChange={handleChecked}/>
      {response && <span>{response}</span>}
    </div>
  )
}

export default Hw13