import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) =>{
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b13e52353dmsh7a4b700537f809fp14f058jsn801c4459ac98'
          }
    })
    return data
}