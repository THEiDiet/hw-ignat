import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./MySuperButton.module.css";

type DefaultPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type MyLinkButtonType = DefaultPropsType & {
    primary?: boolean
    secondary?: boolean
    danger?: boolean
    svg?: boolean
}

export const MySuperButton = ({
                                    primary,
                                    secondary,
                                    danger,
                                    children,
                                    className,
                                    svg,
                                    type,
                                    ...restProps
                                }: MyLinkButtonType) => {
    const MyButtonClass = `${s.default} ${secondary ? s.secondary : s.primary} ${danger ? s.danger : ''} ${className}`
    return (
        <button
            type='button'
            className={MyButtonClass}
            {...restProps}
            >
            {svg && <svg>
                <rect x="0" y="0" fill='none' width="100%" rx='5' ry='5' height="100%"/>
            </svg>}
            {children}
        </button>
    )
}