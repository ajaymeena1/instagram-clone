import axios from 'axios';

export const createPost =  (post) => { axios({
    url: "/api/post",
    method: "POST", 
    headers:{"content-Type":"application/json"},
    data: post

}).then((res) => { console.log(res) }).catch(() => console.log("errrrrrrr "))
}

export const loginPost =  (post) => { axios({
    url: "/api/login",
    method: "POST", 
    headers:{"content-Type":"application/json"},
    data: post

}).then((res) => { console.log(res) }).catch(() => console.log("errrrrrrr "))
}

// export const uploadPost =  (post) => { axios({
//     url: "/api/upload",
//     method: "POST", 
//     data: post

// }).then((res) => { console.log(res) }).catch(() => console.log("errrrrrrr "))
// }