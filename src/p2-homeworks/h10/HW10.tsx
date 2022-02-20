import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import c from "../../p1-main/m1-ui/u1-app/App.module.scss";
import {ReactComponent as Loader} from "../../assets/loader.svg";

function HW10() {
    const loading = useSelector((state:AppStoreType) => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch((loadingAC(true)))
        console.log(loading)
        setTimeout(()=>{
            dispatch((loadingAC(false)))
        },1000)
        console.log('loading...')
    };

    return (
        <div>
            <span className={c.hw__title}>homeworks 10</span>
            <div className={c.container}>
            {loading
                ? (
                    <Loader/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default HW10
