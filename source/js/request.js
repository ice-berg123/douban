async function PostData(url,data){
    const response = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:JSON.stringify(data)
    })
    return response.json();
}
PostData('39.106.81.229:9920/api/user/login',{username:123456,password:123456}).then(
    data => {
        console.log(data);
    }
)