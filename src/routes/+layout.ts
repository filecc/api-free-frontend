

export async function load({ fetch, depends }){
    const res = await fetch('http://localhost:4000/user/isLogged/', {
		method: 'GET',
		credentials: 'include'
	})
    const result = await res.json()
    let islogged;
    if(result.code == 200)
    {
        islogged = true;
    } else {
        islogged = false;
    }

    depends("isLogged")
    return { islogged }
    
}