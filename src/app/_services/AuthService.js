import ApiService from "./ApiService";


export default class AuthService extends ApiService{
    baseUrl = 'http://localhost:3000';

    static async login(data){
        try{
            const response = await AuthService.makeRequest(baseUrl + '/login', 'POST', data);
            console.log(response);
        } catch(e){
            console.error(e);
        }
    }
}