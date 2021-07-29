import React, { useState, useEffect } from 'react'


const Profile = () => {
    const [result, setState] = useState([]);

    useEffect(() => {
        fetch('/api/profilePost', {

        }).then((res) => res.json())
            .then((result) => {
                // console.log(result)
                setState(result.galleryposts)
            })
    },[])
    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid gray' }}>
                <div style={{ marginRight: '50px' }}>
                    <img style={{ height: '150px', width: '150px', borderRadius: '80px' }} src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div>
                    <h5>Aj</h5>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '106%' }}>
                        <h5>10 photos</h5>
                        <h5>10 following</h5>
                        <h5>10 followers</h5>

                    </div>
                </div>
            </div>
            <div className='gallery'>
                {
                    result.map((item) => {
                        return (
                            <img className='item' src={item.img} alt={item.title} />
                        )
                    })
                }



            </div>
        </div>
    )
}

export default Profile
