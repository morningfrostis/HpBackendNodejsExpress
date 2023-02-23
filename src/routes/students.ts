import { Router } from "express";
const router = Router();
import {
  getStudents,
  getStudentsById,
  createStudents,
  updateStudents,
  removeStudents,
} from "../controllers/students";

router.get("/", async (request, response) => {
  try {
    const students = await getStudents();
    response.status(200).json(students);
  } catch (error) {
    response.status(500);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const students = await getStudentsById(id);
    response.status(200).json(students);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.post("/", async (request, response) => {
  try {
    const data = request.body;
    const students = await createStudents(data);
    response.status(200).json(students);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    const students = await updateStudents(id, data);
    response.status(200).json(students);
  } catch (error) {
    response.status(500);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await removeStudents(id);
    response.status(200).json(true);
  } catch (error) {
    response.status(500);
  }
});

module.exports = router;
