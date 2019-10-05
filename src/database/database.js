import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    /*Banco...:*/ 'postgres',
    /*Usuário.:*/ 'postgres',
    /*Senha...:*/ 'sql',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        }
    }
);