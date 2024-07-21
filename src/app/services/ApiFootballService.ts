import axios from "axios";


const api = axios.create({
    baseURL: "https://v3.football.api-sports.io",
    headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "b1ddd02e5cab8d3eccb3c8345f581b21"
    }
})


export default class ApiFootballService {
    
    static async getTeamsByNameAsync(nome : string) : Promise<any>  
    {
        var apiResponse = await api.get(`teams?search=${nome}`);
        return apiResponse.data;
    }

    static async getSquadAsync(teamId : number) : Promise<any>
    {
        var apiResponse = await api.get(`players/squads?team=${teamId}`);
        return apiResponse.data;
    }
}