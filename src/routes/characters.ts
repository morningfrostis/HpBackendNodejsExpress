import { Router } from "express";
const router = Router();
import {
  getCharacters,
  getCharactersById,
  createCharacters,
  updateCharacters,
  removeCharacters,
} from "../controllers/characters";

router.get("/", async (request, response) => {
  try {
    const characters = await getCharacters();
    response.status(200).json(characters);
  } catch (error) {
    response.status(500);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const character = await getCharactersById(id);
    response.status(200).json(character);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.post("/", async (request, response) => {
  try {
    const data = request.body;
    const character = await createCharacters(data);
    response.status(200).json(character);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    const character = await updateCharacters(id, data);
    response.status(200).json(character);
  } catch (error) {
    response.status(500);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await removeCharacters(id);
    response.status(200).json(true);
  } catch (error) {
    response.status(500);
  }
});

module.exports = router;
