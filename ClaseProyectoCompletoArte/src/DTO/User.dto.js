
export class UserPresenterDTO {
    constructor(user){
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.fullName = `${this.first_name} ${this.last_name}`;
        this.email = user.email;
        this.avatar = user.avatar;
        this.role = user.role;
    }
}

export class UserInsertDTO {
    constructor(user){
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.fullName = `${this.first_name} ${this.last_name}`;
        this.email = user.email;
        this.password = user.password;
        this.avatar = user.avatar;
        this.address = user.address||'sin especificar';
    }
}