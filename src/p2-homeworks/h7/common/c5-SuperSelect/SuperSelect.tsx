import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './../../HW7.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options?.map((o,i) => <option key={i} value={o}>{o}</option>) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <>
            <label htmlFor="id"/>
            <div className={s.select}>
                <select className={s.selectItem} id={'id'} onChange={onChangeCallback} {...restProps}>
                    {mappedOptions}
                </select>
                <span className={s.focus}/>
            </div>
        </>
    )
}

export default SuperSelect
