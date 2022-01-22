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
        <label key={name + '-' + i} className={s.label}>
            <input
                className={s.inputCheckbox}
                type={'radio'}
                name={o}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
                {...restProps}

            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
