export default class User {
    static get model(){
        return 'Users';
    }

    static get schema(){
        return {
            name:String,
            email:String,
            password:String
        }
    }
}