import * as PassHash from 'password-hash';

export default class UserService {
  
  static login(email, password) {
    let current = localStorage.getItem("currentUser");
    const account = JSON.parse(localStorage.getItem(email));
    return PassHash.verify(password, account.password) ? {
        email,
        ...account
      } : null;
  }

  static logout() {
    localStorage.removeItem("currenUser");
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

}