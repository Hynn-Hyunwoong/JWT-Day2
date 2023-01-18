class UserController {
    constructor({userService}){
        this.userService = userService;
    }
    async postSignup(req,res,next){
        try{const {userId, userPw, userName} = req.body;
        const user = await this.userService.signUp({userId, userPw, userName});
        res.status(201).json(user);
        }
        catch(e){
            next(e);
        }
    }
}

module.exports = UserController;