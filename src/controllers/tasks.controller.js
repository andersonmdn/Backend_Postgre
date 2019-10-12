import Task from '../models/task';

export async function createTask(req, res) {
    const { name, done, project_id } = req.body;
    try {
        let newTask = await Task.create({ name, done, project_id }, { fields: ['name', 'done', 'project_id']});
        
        if (newTask) {
            return res.json({
                message: "Projeto salvo",
                data: newTask      
            });
        };
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Algo deu errado",
            data: {}
        });
    };
}

export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll({attributes: ['id', 'project_id', 'name', 'done'], order:[['id', 'desc']]});
        
        res.json({
            data:tasks
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Algo deu errado :(",
            data: {}
        });
    }
}

export async function getOneTask (req, res) {
    const { id } = req.params;
    try {
        const task = await Task.findOne({
            where: { id },
            attributes: ['id', 'project_id', 'name', 'done']
        });
        
        res.json({
            data:task
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Algo deu errado :(",
            data: {}
        });
    }
}

export async function deleteTask(req, res) {
    const { id } = req.params;

    const deleteRowCount = await Task.destroy({
        where: {
            id
        }
    });

    res.json({
        message: "Projeto Removido",
        count: deleteRowCount
    });
}

export async function updateTask(req, res) {
    const { id } = req.params;
    const { name, done, project_id } = req.body;

    const tasks = await Task.findAll({
        attributes: [ 'id', 'name', 'done', 'project_id' ],
        where: {
            id
        }
    });

    if(tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                name,
                done,
                project_id
            });
        });
    };

    return res.json({
        message: "Task Atualizada",
        date: tasks
    });
}

export async function getTaskByProject(req, res) {
    const { project_id } = req.params;
    const tasks = await Task.findAll({
        attributes: ['id', 'project_id', 'done', 'name'],
        where: { project_id }
    });

    res.json({ tasks });
}