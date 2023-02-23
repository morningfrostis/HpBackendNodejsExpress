import { request, response } from "express";

const db = require("../models");
const Students = db.students;

export const getStudents = async () => {
  const result = await Students.findAll(request.body);
  return result;
};

export const getStudentsById = async (id: string) => {
  const result = await Students.findByPk(id);
  return result;
};

export const createStudents = async ({
  //@ts-ignore
  idNasa,
  //@ts-ignore
  camera,
  //@ts-ignore
  img_src,
  //@ts-ignore
  earth_date,
}) => {
  const result = await Students.create({ idNasa, camera, img_src, earth_date });
  return result;
};
//@ts-ignore
export const updateStudents = async (id: string, data) => {
  const result = await Students.update(
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

export const removeStudents = async (id: string) => {
  await Students.destroy({
    where: {
      id,
    },
  });
  return true;
};
