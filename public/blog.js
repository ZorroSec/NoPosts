import { postsList } from "./db.js"
const username = document.getElementById('username')
const post = document.querySelector('textarea#post')
const btn = document.getElementById('btn')

btn.onclick = ()=>{
    let posts = document.getElementById('posts')
    posts.innerHTML+=`
    <div class='username'>
        <h4>${username.value}</h4>
    </div>
    <div class='postContent'>
        <p>
            ${post.value}
        </p>
    </div>
    `
}