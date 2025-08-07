import React, {useRef, useEffect} from 'react'
import mountMe from 'marketing/Marketing'
//console.log('marketingApp/mount: ', mountMe)
export default () => {
    const ref = useRef(null)
 //   console.log('what is ref:', ref)
    useEffect(()  =>{ 
        console.log('what is ref:', ref)
        mountMe(ref.current)
    })
    return <div ref = {ref} />
}