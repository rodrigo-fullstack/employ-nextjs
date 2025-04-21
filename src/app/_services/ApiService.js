

export default class ApiService{
    static baseUrl = 'http://localhost:8000/api';
    
    static async makeRequest(url, method, body = null){
        const options = {
            method: method,
            headers: {
                Accept: 'application/json'
            }
        }
        
        if(body){
            options.body = body;
        }

        try{
            const response = await fetch(url, options);

            if(!response.ok){
                try{
                    let jsonError = await response.json();
                    throw new Error(jsonError.message);
                } catch(e){
                    console.error('Json Inválido');
                    throw e;
                }
            }

            const jsonText = await response.text();
            console.log(jsonText);
            return;
            const json = JSON.parse(jsonText);
            if(json.error){
                throw new Error(json.message);
            }

            return json;
        } catch(e){
            console.error(e);
        }
    }
}