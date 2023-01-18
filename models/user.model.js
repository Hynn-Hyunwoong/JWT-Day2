module.exports = (sequelize, Sequelize) => {
    // class 선언
    class User extends Sequelize.Model {
        static initialize() {
            return this.init(
                {
                    userId: {
                        type: Sequelize.STRING(60),
                        primaryKey: true,
                    },
                    userPw: {
                        type: Sequelize.STRING(64),
                        allowNull: false,
                    },
                    username: {
                        type: Sequelize.STRING(30),
                        allowNull: false,
                    },
                    provider: {
                        type: Sequelize.ENUM("local", "kakao"),
                        allowNull: false,
                        defaultValue: "local",
                    },
                    snsId: {
                        type: Sequelize.STRING(30),
                        allowNull: true,
                    },
                },
                {
                    sequelize,
                }
            )
        }
    }

    // class 사용
    User.initialize()
}