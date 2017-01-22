import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {UserComment} from "../_models/comment";
import {CommentService} from "../_services/comment.service";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    comments: UserComment[] = [];

    constructor(private userService: UserService,
                private comentService: CommentService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.getAllComments();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    getAllComments(){
        this.comentService.getAll().subscribe(comments => { this.comments = comments;
            console.log(this.comments);});
    }

    deleteComment(id: number) {
        this.comentService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
}