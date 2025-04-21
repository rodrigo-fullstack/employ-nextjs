'use server'

import AuthService from "./AuthService";

export async function login(formData) {
    return await AuthService.login(formData);
}