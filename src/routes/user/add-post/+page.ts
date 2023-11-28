

export async function load({ fetch }){
    const res = await fetch('http://localhost:4000/user/isLogged/', {
		method: 'GET',
		credentials: 'include'
	})
    const result = await res.json()
    return { result }
    
}