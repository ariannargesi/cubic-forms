import React, { useEffect, useState } from 'react'
import './Gears.css'

import gearsGif from '../../assets/gears.gif'
import gearsPng from '../../assets/gears.png'



interface GearsProps {
    dependency: string  
}

const Gears =  React.memo<GearsProps>(({dependency}) => {
    
    const [showGif, setShowGif] = useState<boolean | null>(false)
    let firstTime = React.useRef(true)
    const customUseEffect = () => {
         if(showGif === false) {
            setShowGif(true)
            setTimeout(() => {
                setShowGif(false)
            }, 600)
        }
    }
     
    useEffect(() => {
        if(firstTime.current === false )
            customUseEffect()
        else firstTime.current = false 
            console.log(firstTime)
    }, [dependency])
   
    const backgroundImage = showGif ? "show-gif" : 'show-png'
    return (
        <>
         <div className={`gears ${backgroundImage}`}> 
         </div>
        </>
    )
})

export default Gears