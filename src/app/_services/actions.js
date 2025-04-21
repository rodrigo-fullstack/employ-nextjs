'use server'

import { redirect } from "next/navigation.js";
import AuthService from "./AuthService.js";
import { cookies } from "next/headers.js";

export async function login(previousState, formData) {
    const response = await AuthService.login(formData);

    if(response.error){
        return response;
    }

    cookies().set({
        name: 'token', 
        value: response.data,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    });
    redirect('/dashboard');
}