class UserService {
    constructor({userRepository, jwt}){
        this.userRepository = userRepository
        this.jwt = jwt
        this. crypto = jwt.crypto
    }

    async signUp({userId, userPw, userName}){
        try{
            if(!userId || !userPw || !userName) throw 'Empty Information, Please try again';
            const hash = this.crypto.createHmac('sha256','1234').update(userPw).digest('hex');
            const user = await this.userRepository.addUser({userId, userName, userPw :hash})
            return user;
        }catch(e){

        }
    }
}

module.exports = UserService;