import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
} from "react";
import s from './MySuperInput.module.css'

type MySuperInputType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    placeholder: string
    error?: string
    spanClassName?: string
    errorClassName?: string
    inputClassName?: string

    onChangeText?: (value: string) => void
    onEnter?: () => void
}

export const MySuperInput: React.FC<MySuperInputType> = ({
                                                             type,
                                                             onChange,
                                                             onChangeText,
                                                             onKeyPress,
                                                             className,
                                                             error,
                                                             placeholder,
                                                             onEnter,
                                                             spanClassName,
                                                             errorClassName,
                                                             inputClassName,
                                                             ...restProps
                                                         }) => {
    let finalLabelClassName = spanClassName ? spanClassName : ''
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)
        onEnter && e.key === 'Enter' && onEnter()
    }

    return (
        <div className={s.inputContainer}>

            <input type="text" onChange={onChangeHandler} onKeyPress={onEnterHandler}
                   className={`${s.inputClass} ${inputClassName ? inputClassName : ''}`}
                    {...restProps} />
            <div className={s.inputAfter}/>
            {placeholder &&
            <label
                className={`${s.inputLabel} ${finalLabelClassName}`}
            >{placeholder}</label>}
            {error && <div className={`${s.inputError} ${errorClassName ? errorClassName : ''}`}>{error}</div>}
        </div>
    )
}