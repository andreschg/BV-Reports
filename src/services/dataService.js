import axios from 'axios';

const apiUrl = "http://www.beenverified.com/hk/dd/email";

export default class DataService {

  static getReport(email) {
    return axios.get(`${apiUrl}?email=${email}`);
  }
}