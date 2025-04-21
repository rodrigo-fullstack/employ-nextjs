

export default class ApiService{
    static async makeRequest(url, method, body = null){
        const options = {
            method: method,
            headers: {}
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

            const json = await response.json();
            if(json.error){
                throw new Error(json.message);
            }

            return json;
        } catch(e){
            console.error(e);
        }
    }
}