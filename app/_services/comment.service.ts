import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class CommentService {
    constructor(private http: Http) { }

    saveComment(username: string, message: string) {
        return this.http.post('/api/comments', JSON.stringify({ username: username, message: message }))
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

    delete(id: number) {
        return this.http.delete('/api/comments/' + id, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}