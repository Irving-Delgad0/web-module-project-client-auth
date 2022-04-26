import React, {useState} from "react"
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login() {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const {push} = useHistory()

    const onChange = (evt) => {
        const {name, value} = evt.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', credentials)
        .then(res => {
            window.localStorage.setItem('token', res.data.token)
            push('/friends')
        })
        .catch(err => {
            debugger
        })
    }

    return(
        <>
        <h1>LOGIN</h1>
        <form onSubmit={onSubmit}>
            <label /> USERNAME
            <input 
                name = 'username'
                type = 'text'
                value = {credentials.username}
                onChange = {onChange}
                placeholder = 'username'
            />
            <label /> PASSWORD
            <input 
                name = "password"
                type = "password"
                value = {credentials.password}
                onChange = {onChange}
                placeholder = 'password'
            />
            <button>Submit</button>
        </form>
        </>
    )
}

export default Login