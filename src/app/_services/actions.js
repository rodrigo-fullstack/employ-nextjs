'use server'

import AuthService from "./AuthService";

export async function login(formData){
    const response = await AuthService.login(formData);
    console.log(response);
    // if(response.error){
    //     throw new Error(response.message);
    // } else{
    //     console.log('Resposta ok');
    //     console.log(response);
    // }
}