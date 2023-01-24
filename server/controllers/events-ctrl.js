const eventsModel = require("../models/events-model");

const getAll = async (req, res) => {
    await eventsModel.find({}).populate("group")
        .then((events, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (events.length === 0) {
                return res.json({ success: false, massage: "no events found" });
            }
            res.status(200).json({ success: true, events })
        })
}

const getById = async (req, res) => {
    await eventsModel.findById(req.params.id).populate("groups")
        .then((event) => {
            if (!event) {
                return res.json({ success: false, massage: "event is not found" });
            }
            return res.status(200).json({ success: true, event });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
    await eventsModel.insertMany(req.body)
        .then((result) => res.status(300).json({ success: true, massage: result }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    eventsModel.findByIdAndUpdate(req.params.id,req.body)
        .then((events) => res.status(200).json({ sucsess: true, events }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteObj = async (req, res) => {
    await eventsModel.findByIdAndDelete(req.params.id)
        .then(events => res.status(200).json({ success: true, events }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteObj
}