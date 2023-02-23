import { Router } from "express";
const router = Router();
import {
  getSpells,
  getSpellsById,
  createSpells,
  updateSpells,
  removeSpells,
} from "../controllers/spells";

router.get("/", async (request, response) => {
  try {
    const spells = await getSpells();
    response.status(200).json(spells);
  } catch (error) {
    response.status(500);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const spells = await getSpellsById(id);
    response.status(200).json(spells);
  } catch (error) {
    response.status(500).json(error);
  }
});

router.post("/", async (request, response) => {
  try {
    const data = request.body;
    const spells = await createSpells(data);
    response.status(200).json(spells);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = request.body;
    const spells = await updateSpells(id, data);
    response.status(200).json(spells);
  } catch (error) {
    response.status(500);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    await removeSpells(id);
    response.status(200).json(true);
  } catch (error) {
    response.status(500);
  }
});

module.exports = router;
