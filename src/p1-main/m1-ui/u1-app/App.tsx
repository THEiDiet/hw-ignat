import React from 'react'
import s from './App.module.scss'

import HW5 from "../../../p2-homeworks/h5/HW5";

function App() {
    return (
        <div className={s.app}>
            <div className={s.app__title}>React homeworks</div>
            {/*<Navigation/>*/}
            {/*<HomePage/>*/}
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>
        </div>
    )
}

export default App
