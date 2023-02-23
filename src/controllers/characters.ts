import { request, response } from "express";

const db = require("../models");
const Data = db.data;

export const getCharacters = async () => {
  const result = await Data.findAll(request.body);
  return result;
};

export const getCharactersById = async (id) => {
  const result = await Data.findByPk(id);
  return result;
};

export const createCharacters = async ({
  idNasa,
  camera,
  img_src,
  earth_date,
}) => {
  const result = await Data.create({ idNasa, camera, img_src, earth_date });
  return result;
};

export const updateCharacters = async (id, data) => {
  const result = await Data.update(
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

export const removeCharacters = async (id) => {
  await Data.destroy({
    where: {
      id,
    },
  });
  return true;
};

