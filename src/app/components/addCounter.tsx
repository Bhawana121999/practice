import React, { useMemo } from 'react'

export default function addCounter() {

    useMemo(() => {
        console.log('apple')
    }, [])

    return (

        <div>abc</div>
    )
}
