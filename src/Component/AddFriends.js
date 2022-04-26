import React, {useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

function AddFriend() {
    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    })

    const {push} = useHistory()

    if(!window.localStorage.getItem('token')){
        push('/login')
    }

    const onChange = e => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        const newFriend = {
            name: form.name,
            age: form.age,
            email: form.email

        }
        axios.post('http://localhost:9000/api/friends', newFriend, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            push('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Name:</label>
                    <input onChange={onChange} name="name" id="name" />
                </div>
                <div>
                    <label>Age:</label>
                    <input onChange={onChange} name="age" id="age" />
                </div>
                <div>
                    <label>Email:</label>
                    <input onChange={onChange} name="email" id="email"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
        )
      }

      export default AddFriend