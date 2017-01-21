import { Component } from '@angular/core';
import {UserComment} from "../_models/comment";
import {CommentService} from "../_services/comment.service";
import {AlertService} from "../_services/alert.service";

@Component({
    selector: 'rating',
    template: `
 <div class="container content-container">
    <div class="col-md-6 col-md-offset-3">
        <legend class="text-center header">Podziel się swoją opinią</legend>
        <form name="form" class="form-horizontal" (ngSubmit)="saveComment()" #f="ngForm" novalidate>

            <div class="form-group" >
                <input type="text" class="form-control" placeholder="First Name" name="username" [(ngModel)]="model.username" required />
                <!--<div *ngIf="f.submitted && !username.valid" class="help-block">Username is required</div>-->
            </div>
            <div class="form-group" >
                <textarea rows=7 type="text" class="form-control" placeholder="Leave your comment here" name="message" [(ngModel)]="model.message" required ></textarea>
                <!--<div *ngIf="f.submitted && !massage.valid" class="help-block">massage is required</div>-->
            </div> 
            <div class="form-group">
                <button [disabled]="!f.form.valid" class="btn btn-primary">Comment</button>
                <img *ngIf="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            </div>
        </form>
    </div>
</div>   

<style>
    .header {
        color: #36A0FF;
        height: 70px;
        font-size: 27px;
        padding: 10px;
    }
</style>

`
})
export class RatingComponent  {
    model:UserComment;
    loading:boolean = false;

    constructor(private commentService: CommentService, private alertService: AlertService ){
    }

    ngOnInit() {
        this.model = new UserComment();
    }

    saveComment(){
        this.loading = true;
        this.commentService.saveComment(this.model.username, this.model.message)
            .subscribe(
                data => {
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }


}
