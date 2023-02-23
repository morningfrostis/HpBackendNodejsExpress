import { Request, Response } from "express";
import { Router } from "express";
const router = Router();
import { getUserById } from "../controllers/user";

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await getUserById(id);
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
});

module.exports = router;
