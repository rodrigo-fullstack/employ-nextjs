import ApiService from "./ApiService";


export default class AuthService extends ApiService{
    static async login(data){
        const url = AuthService.baseUrl + '/login';
        console.log(url);
        try{
            return await AuthService.makeRequest(url, 'POST', data);
        } catch(e){
            console.error(e);
        }
    }
}