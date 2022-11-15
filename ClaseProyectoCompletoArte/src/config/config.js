export default {
    mongo:{
        USER : process.env.MONGO_USER,
        PWD : process.env.MONGO_PWD,
        DB : process.env.MONGO_DATABASE||''
    }
}