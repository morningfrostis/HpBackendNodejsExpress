import { request, response } from "express";

const db = require("../models");
const Characters = db.data;

export const getCharacters = async () => {
  const result = await Characters.findAll(request.body);
  return result;
};

export const getCharactersById = async (id: string) => {
  const result = await Characters.findByPk(id);
  return result;
};

export const createCharacters = async ({
  //@ts-ignore
  idNasa,
  //@ts-ignore
  camera,
  //@ts-ignore
  img_src,
  //@ts-ignore
  earth_date,
}) => {
  const result = await Characters.create({
    //@ts-ignore
    idNasa,
    //@ts-ignore
    camera,
    //@ts-ignore
    img_src,
    //@ts-ignore
    earth_date,
  });
  return result;
};
//@ts-ignore
export const updateCharacters = async (id: string, data) => {
  const result = await Characters.update(
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

export const removeCharacters = async (id: string) => {
  await Characters.destroy({
    where: {
      id,
    },
  });
  return true;
};
