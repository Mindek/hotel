import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CommentService {
    constructor(private http: Http) { }

    saveComment(username: string, message: string) {
        return this.http.post('/api/comments', JSON.stringify({ username: username, password: message }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });

    }

    getAll() {
        return this.http.get('/api/comments').map((response: Response) => response.json());
    }

}