const storiesModel = require("../models/stories-model");

const getAll = async (req, res) => {
    await storiesModel.find({}).populate(["creator","group"])
        .then((stories, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (stories.length === 0) {
                return res.json({ success: false, massage: "no stories found" });
            }
            res.status(200).json({ success: true, stories })
        })
}

const getById = async (req, res) => {
    await storiesModel.findById(req.params.id)
        .then((story) => {
            if (!story) {
                return res.json({ success: false, massage: "story not found" });
            }
            return res.status(200).json({ success: true, story });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
    await storiesModel.insertMany(req.body)
        .then((result) => res.status(300).json({ success: true, massage: result }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    storiesModel.findByIdAndUpdate(req.params.id,req.body)
        .then((stories) => res.status(200).json({ sucsess: true, stories }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteObj = async (req, res) => {
    await storiesModel.findByIdAndDelete(req.params.id)
        .then(stories => res.status(200).json({ success: true, stories }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteObj
}