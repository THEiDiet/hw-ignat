import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import c from './../../p1-main/m1-ui/u1-app/App.module.scss'
import s from './common/c4-SuperEditableSpan/EditableSpan.module.scss'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', value))
    }

    return (
        <div className={s.container}>
            <span className={c.hw__title}> homeworks 6</span>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div className={s.buttons}>
                <SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore}>restore</SuperButton>
            </div>

        </div>
    )
}

export default HW6
