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
    const url = `${env.BASE_PATH}/pokemon?limit=10000`
    try {
        const response = await fetch(url)
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        throw error
    } 
}