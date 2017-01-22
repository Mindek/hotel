export class UserComment {
    id: number;

    username: string;
    message: string;


    constructor(username?: string, message?: string) {
        this.username = username;
        this.message = message;
    }
}