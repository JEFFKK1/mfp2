import React, {useRef, useEffect} from 'react'
import mountMe from 'dashboard/Dashboard'

export default () => { 
    const ref = useRef(null)
   
    useEffect(()  =>{ 
        mountMe(ref.current)
    }, [] )
    return <div ref = {ref} />
}