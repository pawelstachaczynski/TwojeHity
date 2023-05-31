import { User } from "./user.model";


export class AuthInfo {
    isAuthenticated: boolean;
    
    constructor(user : User) {
        console.log(user);
        this.isAuthenticated = !user ? false : true;

    }

}