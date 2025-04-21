'use server'

import { redirect } from "next/dist/server/api-utils/index.js";
import AuthService from "./AuthService.js";

export async function login(formData) {
    const response = await AuthService.login(formData);

    // if(response.error){
    //     return response;
    // }

    return response;
    redirect('/dashboard');
    

}