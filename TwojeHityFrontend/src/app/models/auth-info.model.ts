import { User } from "./user.model";


export class AuthInfo {
    isAuthenticated: boolean;
    
    constructor(user : User) {
        console.log('co to' + JSON.stringify(user));
        this.isAuthenticated = !user ? false : true;

    }

}