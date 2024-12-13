import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const authenticate = (req, res, next) => {
  const tokenGet = req.headers["authorization"]; //geting token  for varification

  if (tokenGet) {
    const shortToken = tokenGet.split(" ")[1];
    const varifytoken = jwt.verify(shortToken, SECRET_KEY); //token varification for using secret key
    if (varifytoken) {
      next();
    } else {
      res.status(400).send({ message: "Invalid Token" });
    }
  } else {
    res.status(500).send({ msg: "Token is required" });
  }
};
