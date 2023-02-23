const db = require("../models");
const User = db.user;
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { getUserByEmail } from "./user";
const saltRounds = 10;

export const signup = async ({ email, password }) => {
  console.log(db.user);
  const existedUser = await getUserByEmail(email);
  if (existedUser) {
    throw new Error("User existed");
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ email, password: hashedPassword, salt });
  console.log(user);
  //@ts-ignore
  return jsonwebtoken.sign({ email: user.email }, process.env.TOKEN_SECRET);
};

export const login = async ({ email, password }) => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Wrong password");
  }
  //@ts-ignore
  return jsonwebtoken.sign({ email: user.email }, process.env.TOKEN_SECRET);
};
