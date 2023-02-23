import { request, response } from "express";

const db = require("../models");
const Spells = db.spells;

export const getSpells = async () => {
  const result = await Spells.findAll(request.body);
  return result;
};

export const getSpellsById = async (id) => {
  const result = await Spells.findByPk(id);
  return result;
};

export const createSpells = async ({
  idNasa,
  camera,
  img_src,
  earth_date,
}) => {
  const result = await Spells.create({ idNasa, camera, img_src, earth_date });
  return result;
};

export const updateSpells = async (id, data) => {
  const result = await Spells.update(
    data,
    {
      where: {
        id: id,
      },
    },
    { new: true }
  );
  if (!result) {
    throw new Error("No se encuentra el personaje a actualizar");
  }
  return result;
};

export const removeSpells = async (id) => {
  await Spells.destroy({
    where: {
      id,
    },
  });
  return true;
};
