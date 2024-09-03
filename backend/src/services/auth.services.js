import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { generateOTP } from "../utils/generate-otp.js";
import { generateToken } from "../utils/generate-token.js";
import lodash from "lodash";
export const loginService = async (data) => {};
export const logoutService = async (data) => {};
export const signupService = async (data, res) => {
  const { email, password, name } = data;

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("user already exists");
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const verificationOTP = generateOTP(6);
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken: verificationOTP,
      verificationTokenExpiresAt: Date.now() + 60 * 60 * 1000,
    });
    await user.save();
    const token = generateToken(res, user._id);
    return { status: 201, success: true, message: "user created",user:lodash.pick(user,["_id","name","email"]), token };
};
