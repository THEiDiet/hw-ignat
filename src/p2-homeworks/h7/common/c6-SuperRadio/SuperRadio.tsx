import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './../../HW7.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.target.name)
    }

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <span key={o} className={s.inputRadio}>
            <input
                id={o}
                type={'radio'}
                name={o}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
                {...restProps}

            />
            <label key={name + '-' + i} htmlFor={o} className={s.label}>{o}</label>
        </span>
    )) : []

    return (
        <div className={s.radioBtns}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
