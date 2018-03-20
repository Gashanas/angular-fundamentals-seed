import { Injectable } from '@angular/core';
import { User } from './models/form.model';

@Injectable()
export class Service {

    private user: User;

    constructor() {

    }

    setUser(user: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    ping() {
        console.log("Hello");
    }
}