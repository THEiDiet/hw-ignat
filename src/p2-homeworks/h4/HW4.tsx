import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import {MySuperButton} from "./common/SuperLinkButton/MySuperButton";
import {MySuperInput} from "./common/MySuperInput/MySuperInput";
import MyCheckbox from "./common/MyCheckbox/MyCheckbox";

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div className={c.marginTop}>
            <span className={c.hw__title}>homeworks 4</span>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />
                <SuperInputText
                    className={s.blue}
                />

                {/*----------------------------------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red
                    onClick={showAlert}
                >
                    delete
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text
                </SuperCheckbox>
                <SuperCheckbox checked={checked} onChange={testOnChange}/>

                {/*Личное творчество*/}

                <MySuperButton
                    svg
                >Button</MySuperButton>
                <MySuperButton
                    svg
                    secondary
                >Button 2</MySuperButton>
                <MySuperInput placeholder={'Input something'} error={error} value={text} onChangeText={setText}/>
                <MyCheckbox text={'check me'}/>
            </div>
        </div>
    )
}

export default HW4
