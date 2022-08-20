import { env } from '~/utils' 


export async function getPokemonsApi() { 
    const url = `${env.BASE_PATH}/pokemon?limit=100`
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    } 
}

export async function getPokemonURLApi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonsURLApi(url) {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function getPokemonsAllApi() {
    try { 
        const url = `${env.BASE_PATH}/pokemon?limit=1000000000000`
        const response = await fetch(url , {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
        })
        const result = await response.json() 
        return result
    } catch (error) {
        throw error
    } 
}