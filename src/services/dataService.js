import axios from 'axios';

const apiUrl = "http://www.beenverified.com/hk/dd/email";

export default class DataService {



  static getReportFromApi(email) {
    return axios.get(`${apiUrl}?email=${email}`);
  }

  static getReportFromStorage = (username, id) => 
    new Promise((resolve, reject) => {
        const user = JSON.parse(localStorage.getItem(username));
        const report = user.reports[id];
        report ? resolve(report) : reject('Not found it');
  });
  
  static getReports(username) {
    console.log(username);
    const user = JSON.parse(localStorage.getItem(username));
    console.log(user);
    return user.reports;
  }

  static saveReport(username, data) {
    const user = JSON.parse(localStorage.getItem(username));
    user.reports = user.reports.concat(data);
    localStorage.setItem(username, JSON.stringify(user));
  }
}