const fetch = require("node-fetch");

// get random users
module.exports.getRandomUser = async (_req, res, next) => {
  try {
    const rand = Math.floor(Math.random() * 10) + 1;

    const response = await fetch(`https://serene-bastion-12500.herokuapp.com/users/${rand}`);
    const result = await response.json();

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// get all user
module.exports.getAllUser = async (_req, res, next) => {
  try {
    const response = await fetch("https://serene-bastion-12500.herokuapp.com/users");
    const result = await response.json();

    if (!result) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// get single user details
module.exports.getUserDetails = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await fetch(`https://serene-bastion-12500.herokuapp.com/users/${id}`);
    const result = await response.json();

    if (!result) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// post single user
module.exports.saveUser = async (req, res, next) => {
  try {
    const user = req.body;

    const response = await fetch("https://serene-bastion-12500.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();

    if (!result) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }

    res.send({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// patch update user
module.exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;

    const response = await fetch(`https://serene-bastion-12500.herokuapp.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();

    if (!result) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// patch bulk-update user
module.exports.bulkUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;

    const response = await fetch(`https://serene-bastion-12500.herokuapp.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (!result) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// delete single user
module.exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await fetch(`https://serene-bastion-12500.herokuapp.com/users/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();

    if (!result) {
      return res
        .status(400)
        .send({ status: false, error: "Something went wrong!" });
    }

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};
