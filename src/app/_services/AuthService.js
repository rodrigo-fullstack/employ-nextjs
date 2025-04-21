import ApiService from "./ApiService";


export default class AuthService extends ApiService{
    static async login(data){
        try{
            return await AuthService.makeRequest(AuthService.baseUrl + '/login', 'POST', data);
        } catch(e){
            console.error(e);
        }
    }
}