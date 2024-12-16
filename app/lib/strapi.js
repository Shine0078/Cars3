import axios from 'axios'

const STRAPI_URL = process.env.STRAPI_API_URL


export const fetchExperienceList = async () => {
    try {
        
        const response = await axios.get("http://localhost:3000/api/experience")
        console.log("---------Axios Response List---------")
        console.log(response.data)
        return response.data
    }  catch (error) {
        console.error("Error in fetching experienceList: " + error)
    }
}