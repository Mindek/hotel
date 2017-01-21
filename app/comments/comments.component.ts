import { Component } from '@angular/core';
import {UserComment} from "../_models/comment";
import {CommentService} from "../_services/comment.service";

@Component({
    selector: 'comments',
    moduleId: module.id,
    templateUrl: 'comments.component.html'
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
