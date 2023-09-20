import { v4 as uuid } from 'uuid'

type SignInRequest = {  
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequest){
    await delay()

    return {
        token : uuid(),
        user: {
            name: 'Matheus Correia',
            email: 'matheuscs.kb24@gmail.com',
            avatar_url: 'https://github.com/matheuscs0.png',
        }
    }
}