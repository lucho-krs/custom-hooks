import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({
        data: null,
        isLoaging: true,
        hasError: null
    })

    const getFetch = async () => {

        setState({
            ...state,
            isLoaging: true
        })

        const resp = await fetch( url )
        const data = await resp.json()

        setState({
            data,
            isLoaging: false,
            hasError: null
        })

    }
        

    useEffect(() => {
        getFetch();
    }, [ url ])
    
    return {
        data: state.data,
        isLoaging: state.isLoaging,
        hasError: state.hasError,

    };

}
