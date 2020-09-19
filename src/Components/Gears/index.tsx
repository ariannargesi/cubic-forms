import React, { useEffect } from 'react'
import './Gears.css'

import gearsGif from '../../assets/gears.gif'
import gearsPng from '../../assets/gears.png'





const Gears =  React.memo(() => {
    

    useEffect(() => {
        console.log('re-render')
    }, [])


    return (
        <>
         <div className="gears"> 
         </div>
        </>
    )
})

export default Gears