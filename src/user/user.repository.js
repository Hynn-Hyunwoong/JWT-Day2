// console.log(this);
// console.log(module.exports);
// console.log(module.exports === this);

// function a(){
//     console.log(this);
// }

// console.log(a())

class UserRepository {
    constructor({User}){
        this.User = User
    }

    async addUser(payload){
        try{
            const user = await this.User.create(payload, {raw: true})
            return user
        }catch(e){
            throw new Error(e)
        }
    }
    
}

module.exports = UserRepository;