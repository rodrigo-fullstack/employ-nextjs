

export default class ApiService {
    static baseUrl = 'http://localhost:8000/api';

    static async makeRequest(url, method, body = null) {
        const options = {
            method: method,
            headers: { Accept: 'application/json' }
        }
        if (body) options.body = body;
        const response = await fetch(url, options);
        const jsonText = await response.text();
        const json = JSON.parse(jsonText);
        if (!json.error && !response.ok) {
            json.error = true;
            json.success = false;
        }
        return json;
    }
}