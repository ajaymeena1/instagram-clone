import React, { useState, useEffect } from 'react'


const Home = () => {
    const [result, setState] = useState([]);

    useEffect(() => {
        fetch('/api/getPost', {

        }).then((res) => res.json())
            .then((result) => {
                // console.log(result)
                setState(result.posts)
            })
    },[])
    return (
        <div className='home'>
            {
                result.map((item) => {
                    return (
                        <div className='card home-card'>
                            <h5>ajay</h5>
                            <div className='card-image'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='card-content'>
                                <i className="material-icons" style={{ color: 'red' }}>favorite</i>

                                <h5>{item.title}</h5>
                                <p>{item.body}</p>
                                <input type="text" placeholder="comment" />
                            </div>
                        </div>
                    )
                })
            }

            {/* <div className='card home-card'>
                <h5>ajay</h5>
                <div className='card-image'>
                     <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:'red'}}>favorite</i>

                 <h5>title</h5>
                 <p>amazing</p>
                 <input type="text" placeholder="comment" />
                </div>
            </div><div className='card home-card'>
                <h5>ajay</h5>
                <div className='card-image'>
                     <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdhbGxwYXBlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:'red'}}>favorite</i>
                 <h5>title</h5>
                 <p>amazing</p>
                 <input type="text" placeholder="comment" />
                </div>
            </div> */}
        </div>
    )
}

export default Home
