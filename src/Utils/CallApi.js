import axios from 'axios';
import { BASE_Url } from './Constants';

const config = {
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}

export const CallApi = async( resource) => {
  const { data} = await axios.get(`${BASE_Url}/${resource}` , config);
  return data;
}


