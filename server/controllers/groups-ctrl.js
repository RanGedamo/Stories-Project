const groupsModel = require("../models/groups-model");

const getAll = async (req, res) => {
    await groupsModel.find({})
        .then((groups, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (groups.length === 0) {
                return res.json({ success: false, massage: "no groups found" });
            }
            res.status(200).json({ success: true, groups })
        })
}

const getById = async (req, res) => {
    await groupsModel.findById(req.params.id)
        .then((group) => {
            if (!group) {
                return res.json({ success: false, massage: "group is not found" });
            }
            return res.status(200).json({ success: true, group });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
    await groupsModel.insertMany(req.body)
        .then((result) => res.status(300).json({ success: true, massage: result }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    groupsModel.findByIdAndUpdate(req.params.id,req.body)
        .then((groups) => res.status(200).json({ sucsess: true, groups }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteObj = async (req, res) => {
    await groupsModel.findByIdAndDelete(req.params.id)
        .then(groups => res.status(200).json({ success: true, groups }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteObj
}