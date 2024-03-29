import Project from '../models/project';

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({ name, priority, description, deliverydate }, { fields: ['name', 'priority', 'description', 'deliverydate']});
        
        if (newProject) {
            return res.json({
                message: "Projeto salvo",
                data: newProject      
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

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        
        res.json({
            data:projects
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Algo deu errado :(",
            data: {}
        });
    }
}

export async function getOneProject (req, res) {
    const { id } = req.params;
    try {
        const project = await Project.findOne({
            where: {
                id
            }
        });
        
        res.json({
            data:project
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Algo deu errado :(",
            data: {}
        });
    }
}

export async function deletePoject(req, res) {
    const { id } = req.params;

    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });

    res.json({
        message: "Projeto Removido",
        count: deleteRowCount
    });
}

export async function updateProject(req, res) {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    const projects = await Project.findAll({
        attributes: [ 'id', 'name', 'priority', 'description', 'deliverydate' ],
        where: {
            id
        }
    });

    if(projects.length > 0) {
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
        });
    };

    return res.json({
        message: "Projeto Atualizado",
        date: projects
    });
}