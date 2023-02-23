import { request, response } from "express";

const db = require("../models");
const Students = db.students;

export const getStudents = async () => {
  const result = await Students.findAll(request.body);
  return result;
};

export const getStudentsById = async (id) => {
  const result = await Students.findByPk(id);
  return result;
};

export const createStudents = async ({
  idNasa,
  camera,
  img_src,
  earth_date,
}) => {
  const result = await Students.create({ idNasa, camera, img_src, earth_date });
  return result;
};

export const updateStudents = async (id, data) => {
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

export const removeStudents = async (id) => {
  await Students.destroy({
    where: {
      id,
    },
  });
  return true;
};
