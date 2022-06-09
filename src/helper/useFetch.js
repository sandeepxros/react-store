import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(`${false}`)
    useEffect(() => {
        setLoading(true)
        axios.get(url)
        .then(data=>{
            setResponse(data.data)
            setLoading(false)
        })
        .catch(e=>{
            setHasError(`${true} : ${e}`)
            setLoading(false)
        })
    }, [ url ])
 
    return [ response, loading, hasError ]
}


