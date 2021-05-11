import React from 'react'
export default function TEST({changeWord}) {
    return (
        <>
            <button onClick={word=>changeWord("dasd")} >CHANGE</button>
        </>
    )
}