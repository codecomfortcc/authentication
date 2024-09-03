import {
  loginService,
  logoutService,
  signupService,
} from "../services/auth.services.js";
export const login = async (req, res) => {
  const data = req.body;
  try {
    const response = await loginService(data);
    res.status(200).json(response.user);
  } catch (e) {
    console.error(e);
  }
};
export const logout = async(req, res) => {
  const data = req.body;
  try {
    const response = await logoutService(data);
    res.status(200).json(response);
  } catch (e) {
    console.error(e);
  }
};
export const signup = async(req, res) => {
  const data = req.body;
  console.log(res.cookie)
  try {
    const response = await signupService(data,res);
    res.status(200).json(response);
  } catch (e) {
    console.error(e);
    res.status(400).json({ success: false, message: e.message });
  }
};
