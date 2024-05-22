import axios from "axios";


const api = axios.create({
    baseURL: "https://v3.football.api-sports.io",
    headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "b1ddd02e5cab8d3eccb3c8345f581b21"
    }
})


export default class ApiFootballService {
    static async getFootballTeamsByNameAsync(nome : string) : Promise<any>  
    {
        var resp = await api.get("teams?search=" + nome);
        return resp.data;
    }
}