import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { createPost } from '../../service/api'

const initialPost = {
    name: '',
    password: '',
    email: ''
}

const Signup = () => {
    const [post, setPost] = useState(initialPost)
    const history=useHistory()
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const savePost = async (e) => {
        e.preventDefault();
        await createPost(post)
        history.push('/login')
    }
    return (
        <div className="mycard">
            <div className="card login-card">
                <h1>Instagram</h1>
                <form onSubmit={savePost}>
                <input type="text" placeholder="name" name='name' onChange={handleChange} required />

                <input type="text" placeholder="email" name="email" onChange={handleChange} required/>
                <input type="text" placeholder="password" name='password' onChange={handleChange} required/>
                <button className='btn  #64b5f6 blue darken-1' type="submit">Signup</button>
                </form>
                <h5><Link to='/login'>Already have an account ?</Link></h5>
            </div>
        </div>
    )
}

export default Signup
