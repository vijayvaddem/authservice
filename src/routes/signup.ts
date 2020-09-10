import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters long"),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //return res.status(400).send(errors.array());
      throw new Error("Invaid email or password");
    }

    const { email, password } = req.body;

    console.log("Creating a user now");
    throw new Error("Error connecting to DB");

    res.send({});
  }
);

export { router as signupRouter };
