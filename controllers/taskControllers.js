const taskModel = require("../model/taskModel");

module.exports.create = async (req, res, next) => {
  try {
    const { text, userid } = req.body;
    const task = await taskModel.create({ task: text, userid });
    return res.status(200).json({ msg: "Task created", task, status: true });
  } catch (ex) {
    next(ex);
  }
};

module.exports.fet = async (req, res, next) => {
  try {
    const { userid } = req.body;
    const tasks = await taskModel.find({ userid });
    return res.status(200).json({ msg: "All Tasks", tasks, status: true });
    // return res.json({ msg: "Task created", status: true });
  } catch (ex) {
    next(ex);
  }
};

module.exports.markt = async (req, res, next) => {
  try {
    const { id } = req.body;
    const task = await taskModel.findByIdAndUpdate(id, {
      completed: true,
    });
    return res.status(200).json({ msg: "Marked Done",task, status: true });
  } catch (ex) {
    next(ex);
  }
};

module.exports.markf = async (req, res, next) => {
  try {
    const { id } = req.body;
    const task = await taskModel.findByIdAndUpdate(id, {
      completed: false,
    });
    return res.status(200).json({ msg: "Marked Pending", task, status: true });
  } catch (ex) {
    next(ex);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const { id, text } = req.body;
    const task = await taskModel.findByIdAndUpdate(id, {
      task: text,
    });
    return res.status(200).json({ msg: "Task Update", task, status: true });
  } catch (ex) {
    next(ex);
  }
};

module.exports.pending = async (req, res, next) => {
  try {
    const { userid } = req.body;
    const task = await taskModel.find({ userid, completed: false });
    return res
      .status(200)
      .json({ msg: "List of all pending items", task, status: true });
  } catch (ex) {
    next(ex);
  }
};

module.exports.del = async (req, res, next) => {
  try {
    const { id } = req.body;
    const task = await taskModel.deleteOne({ _id: id });
    return res.status(200).json({ msg: "Task Deleted", task, status: true });
  } catch (ex) {
    next(ex);
  }
};
