document.addEventListener('DOMContentLoaded', function() {
    let user = prompt('digite seu user')
    const name = document.querySelector('.profile-name')
    const username = document.querySelector('.profile-username')
    const repositories = document.querySelector('.repositories')
    const followers = document.querySelector('.Followers')
    const Following = document.querySelector('.Following')
    const endpoint = `https://api.github.com/users/${user}`
    const img = document.querySelector('.profile-avatar')
    const link = document.querySelector('#link')


    fetch(endpoint).then(function(res){
        return res.json();
    }).then(function(json) {
        name.innerText = json.name
        username.innerText = json.login
        followers.innerText = json.followers
        Following.innerText = json.following
        repositories.innerText = json.public_repos
        img.src = json.avatar_url
        link.href = json.html_url
    })


    
})