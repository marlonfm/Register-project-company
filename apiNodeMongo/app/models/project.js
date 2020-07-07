const mongoose = require("../../database/index");


const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },

    description: {
        required: true,
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },

    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],

    createdAt: {
        type: Date,
        default: Date.now,
    },

});


const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;