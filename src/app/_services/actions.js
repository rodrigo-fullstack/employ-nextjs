'use server'

import AuthService from "./AuthService";

export async function login(formData) {
    const response = await AuthService.login(formData);

    if(response.error){
        return response;
    }

    
}