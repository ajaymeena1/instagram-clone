import React,{useState,useEffect} from 'react'
import { uploadPost } from '../../service/api'
import { Link, useHistory } from 'react-router-dom'


// const initialPost = {
//     title: '',
//     body: ''
// }
const UploadPost = () => {
    const [title, setPost] = useState("")
    const [body, setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")

    useEffect(() => {
        if(url)
        {
            fetch('/api/upload',{
                method:'post',
                headers:{"Content-Type":"application/json"},
    
                body:JSON.stringify({
                    title,
                    body,
                    img:url
                })
            }).then((res) => { console.log(res) }).catch(() => console.log("errrrrrrr "))
        }
    }, [url])

    // const handleChange = (e) => {
    //     setPost({ ...post, [e.target.name]: e.target.value });
    // }
    const savePost = (e) => {
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","insta-photos")
        fetch("	https://api.cloudinary.com/v1_1/insta-photos/image/upload",{
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
       
        // e.preventDefault();
        // await uploadPost(post)
        // history.push('/')
    }
    return (
        <div className="card input-card" style={{margin:'20px auto',maxWidth:'500px',padding:'20px',textAlign:'center'}}>
            <input type="text" placeholder="title" name="title" onChange={(e)=> setPost(e.target.value)} />
            <input type="text" placeholder="body" name="body" onChange={(e)=> setBody(e.target.value)} />
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file" name="file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
         
            <button className='btn  #64b5f6 blue darken-1' onClick={savePost}>upload</button>
        </div>
    )
}

export default UploadPost
