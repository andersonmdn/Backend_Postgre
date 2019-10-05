import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Task = sequelize.define('TASKS', {
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    NAME: {
        type: Sequelize.TEXT
    },
    DONE: {
        type: Sequelize.BOOLEAN
    },
    PROJECT_ID: {
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false
});

export default Task;