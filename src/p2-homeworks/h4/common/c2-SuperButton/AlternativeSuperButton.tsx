import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type MyButtonType = DefaultButtonType & {
    secondary?: boolean
    danger?: boolean
}

function AlternativeSuperButton({secondary, danger, className, ...restProps}: MyButtonType) {
    const MyButtonClass = `${s.default} ${secondary ? s.secondary : s.primary} ${danger ? s.danger : ''} ${className}`
    return (

            <button
                className={MyButtonClass}
                {...restProps}
            />

    )
}

export default AlternativeSuperButton
