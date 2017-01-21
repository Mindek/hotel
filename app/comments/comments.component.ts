import { Component } from '@angular/core';
import {UserComment} from "../_models/comment";
import {CommentService} from "../_services/comment.service";

@Component({
    selector: 'comments',
    template: `
    <div class="container content-container">
        <br><br><br><br>
        komenciki TUTAJ!!
    </div>
`
})
export class CommentsComponent  {
    comments: UserComment[] = [];

    constructor(private comentService: CommentService) {
    }

    ngOnInit() {
        this.getAllComments();

    }

    getAllComments(){
        this.comentService.getAll().subscribe(comments => { this.comments = comments;
            console.log(this.comments);});
    }

}
