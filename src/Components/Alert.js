import React, {useEffect} from 'react'

const Alert = ({msg, type, removeAlert, list}) => {
    useEffect(()=> {
        const setTime = setTimeout(() => {
            removeAlert();
        }, 3000);

        return () => clearTimeout(setTime)
    }, [list])

    return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
