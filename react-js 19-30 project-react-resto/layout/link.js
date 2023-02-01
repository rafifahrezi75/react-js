const url = "http://localhost:8000/api";
let token = "ZHTIRSquGW7CYzMgruZbKSNPnhZzA2ulf2rvcXNs";

export const link = axios.create({
    baseURL: url,
    headers: {
        'api_token': token
    }
});