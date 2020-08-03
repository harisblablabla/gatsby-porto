import React from 'react'
import containerStyle from "./container.module.css"

export default function Container( {children}) {
    return (
        <div className={containerStyle.container}>
            {children}
        </div>
    )
}