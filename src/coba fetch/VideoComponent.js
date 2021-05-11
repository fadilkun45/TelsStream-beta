import React, { useState } from 'react'

export const VideoComponent = (props) => {

    const [titlecut,titles] = useState()

    

    return (
        <li onClick={() => props.klik(props.url)}>
            <p>{props.title.slice(0, 50)}</p>
        </li>
    )
}


