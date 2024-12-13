import userModal from "../models/userModals.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {            //user register for the api 
  try {
    const { Name, Date_birth, Email, Password } = req.body;
    console.log(req.body);

    if (!Name || !Date_birth || !Email || !Password) {
      console.log("field");

      return res.status(400).send({ message: "All Fields Are requried" });
    }

    const exinstingUser = await userModal.findOne({ Email: Email });
    if (exinstingUser) {
      console.log("registeed already");

      return res.status(400).send({ message: "All ready user Registered" });
    }
    const hashedPassword = await bcrypt.hash(Password, 10);

    const result = await userModal.create({
      Name,
      Date_birth,
      Email,
      Password: hashedPassword,
    });

    res.status(201).send({
      message: "User Register Success",
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed",
      error: error,
    });
  }
};

export const loginUser = async (req, res) => {             //login user and generate token also
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).send({ message: "All Field Are Required" });
    }

    const result = await userModal.findOne({ Email });

    if (result) {
      const comparePassoword = await bcrypt.compare(Password, result.Password);
      if (comparePassoword) {
        let token = jwt.sign({ result }, process.env.SECRET_KEY, {
          expiresIn: "24h",
        });
        res.status(200).send({ message: "Login Success", token, data: result });
      }
    }
  } catch (error) {
    res.status(400).send({
      message: "Failed",
      data: error,
    });
  }
};



export const getAllUser = async (req, res) => {                   //get All users Data
  try { 
    const response = await userModal.find({});

    if (response) {
      res.status(200).send({ message: "User Get Success", data: response });
    }
  } catch (error) {
    res.status(404).send({ message: "Failed get Data", data: error });
  }
};
