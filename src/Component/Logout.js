import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

function Logout() {

    const {push} = useHistory()

    useEffect(()=> {
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: window.localStorage.getItem("token")
            }
        })
        .then(res => {
            window.localStorage.removeItem("token")
            push('/login')
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (<div></div>)
}

export default Logout;