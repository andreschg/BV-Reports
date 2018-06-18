import * as PassHash from 'password-hash';

export default class UserService {
  
  static login(email, password) {
    const account = JSON.parse(localStorage.getItem(email));
    if (account) {
      if (PassHash.verify(password, account.password)) {
        localStorage.setItem("currentUser", JSON.stringify({ email, password: account.password }));
        return {
          email,
          ...account
        }
      }
    }
    return null;
  }

  static logout() {
    localStorage.removeItem("currentUser");
  }

  static register({name, email, password}) {
    const user = {
      name,
      password: PassHash.generate(password),
      reports: []
    };
    localStorage.setItem(email, JSON.stringify(user));
    return this.login(email, password);
  }

  static auth() {
    let current = JSON.parse(localStorage.getItem("currentUser"));
    if (current) {
      const account = JSON.parse(localStorage.getItem(current.email));
      if (account && current.password === account.password) {
        return {
          email: current.email,
          ...account
        }
      }
    }
    return null;
    
  }

  static saveReport(user,report) {

  }

}