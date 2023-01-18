const UserRepository = require("./user.repository");

describe("UserRepository", () => {
    let User, repository
    beforeEach(()=>{
        User = {
            create : jest.fn().mockResolvedValue({}),
            // create : ()=>{
            //     return new Promise((resolve, reject) => {})
            // }
        }
        repository = new UserRepository({User})
        // console.log(repository)
    })
    it("UserRepository completed Import", () => {
        expect(typeof UserRepository).toBe("function");
    })    
    describe("addUser", () => {
        it('[try] addUser check method',async ()=>{
            const user = await repository.addUser(payload)
            expect(User.create).toHaveBeenCalledWith({userId : "Hynn", userPw : "1449"}, {raw:true}) // Test Function
            expect(user).toEqual({});
        })

        it("[catch] If addUser method Reject ",async ()=>{
            User.create = jest.fn().mockRejectedValue({});
            // await repository.addUser(payload)
            expect(()=> repository.addUser(payload)).rejects.toThrow();
        })
    })
})