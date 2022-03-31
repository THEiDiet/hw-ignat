import React from 'react'
import s from './HW12.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppStoreType } from '../h10/bll/store'
import { changeThemeC, ThemeType } from './bll/themeReducer'
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'

const themes = ['dark', 'red', 'some','blue'] as ThemeType[]

function HW12() {
  const theme = useSelector((state: AppStoreType) => state.theme.theme)
  const dispatch = useDispatch()
  // useDispatch, onChangeCallback
  const handleOptionsOnChange = (option: string) => {
    dispatch(changeThemeC(option as ThemeType))
    console.log(option)
  }
  return (

    <div className={`${c.container} ${s[theme]}`}>
      <span className={s[theme + '-text']}>
                homeworks 12
      </span>
      <SuperRadio options={themes} onChangeOption={handleOptionsOnChange}/>
    </div>
  )
}

export default HW12
