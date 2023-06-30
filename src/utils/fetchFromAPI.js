import axios from "axios";
const BASEURL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASEURL,
    params:{
        maxResults:61
    },
    headers: {
      'X-RapidAPI-Key': '3eaad778a7mshb4909cdf074b0e4p1b7bd8jsn7147fc12be14',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASEURL}/${url}`,options)

    return data
  }