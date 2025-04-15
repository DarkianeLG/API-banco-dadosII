import sequelize from "../database/sequelize.js";
import { DataTypes} from "sequelize";

const Task = sequelize.define(
    'Task',
    {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING
        },
        dataHora: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        tipo: {
            type: DataTypes.ENUM('Pessoal', 'Profissional'),
            allowNull: false 
        }
    },
    {
        // Other model options go here
    },
);

Task.sync();

export default Task;