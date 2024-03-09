import axios from 'axios';
const REST_API_BASE_URL='http://localhost:2000'
export const listEmployee=()=>{
  return axios.get(REST_API_BASE_URL);
}
export const createReminder=(user)=>axios.post(REST_API_BASE_URL,user);
