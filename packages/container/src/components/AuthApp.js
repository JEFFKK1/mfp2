import React, {useRef, useEffect} from 'react'
import mountMe from 'auth/Auth'
import { useHistory } from 'react-router-dom'
export default ({onSignIn}) => { 
    const ref = useRef(null)
    const history = useHistory()
 //   console.log('what is ref:', ref)
    useEffect(()  =>{ 
            const { onParentNavigate } = mountMe(ref.current,{
                initialPath: history.location.pathname,
                onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location
             //   console.log('nextPathname: ', nextPathname)
             //   console.log('pathname: ', pathname)
                if (nextPathname !== pathname) {   
                    history.push(nextPathname)
                }
            },
                onSignIn: () => {
                    onSignIn()
            }
        })
        history.listen(onParentNavigate)
    }, [] )
    return <div ref = {ref} />
}