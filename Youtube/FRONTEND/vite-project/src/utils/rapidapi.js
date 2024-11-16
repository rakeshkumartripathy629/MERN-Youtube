
// const options = {
// 	method: 'GET',
// 	hostname: 'youtube138.p.rapidapi.com',
// 	port: null,
// 	path: '/auto-complete/?q=desp&hl=en&gl=US',
// 	headers: {
// 		'x-rapidapi-key': '',
// 		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
// 	}
// };


import axios from "axios";

const API_KEY=import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    }catch(error){
        console.error("error fetching api data: ",error);
        throw error;
    }
}