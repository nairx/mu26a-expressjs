import * as userService from "../services/userService.js"
const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json({
            success: true,
            users: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const authUser = async (req, res) => {
    try {
        const user = await userService.authUser(req.body);
        res.status(200).json({
            success: true,
            user: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            success: true,
            user: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export { authUser, getUsers, createUser }
