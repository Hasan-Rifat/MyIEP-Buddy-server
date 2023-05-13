/* const UserData = require("../../models/userData/UserData.model");

const getUserData = async (req, res) => {
  try {
    const { email } = req.params;

    const data = await UserData.where({ email })
      .populate("goal")
      .populate("accommodations")
      .populate("present");

    res.status(200).json({
      message: "User data get successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

const createUserData = async (req, res) => {
  try {
    const { email } = req.params;
    const { goal, accommodations, present } = req.body;

    const userData = new UserData({
      email,
      goal,
      accommodations,
      present,
    });

    await userData.save();

    res.status(200).json({
      message: "UserData created successfully",
      userData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

module.exports = {
  getUserData,
  createUserData,
};
 */

const UserData = require("../../models/userData/UserData.model");

const getUserData = async (req, res) => {
  try {
    const { email, id } = req.params;

    const data = await UserData.where({ email, _id: id });
    /*    .populate("goal")
      .populate("accommodations")
      .populate("present"); */

    res.status(200).json({
      message: "User data retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

const createUserData = async (req, res) => {
  try {
    const { email } = req.body;
    const { goal, accommodations, present, name } = req.body;

    const userData = new UserData({
      email,
      /*  goal,
      accommodations,
      present, */
      name,
    });

    await userData.save();

    res.status(200).json({
      message: "UserData created successfully",
      userData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
};

module.exports = {
  getUserData,
  createUserData,
};
