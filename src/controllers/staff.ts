import { request, response } from "express";

const db = require("../models");
const Staff = db.staff;

export const getStaff = async () => {
  const result = await Staff.findAll(request.body);
  return result;
};

export const getStaffById = async (id) => {
  const result = await Staff.findByPk(id);
  return result;
};

export const createStaff = async ({
  idNasa,
  camera,
  img_src,
  earth_date,
}) => {
  const result = await Staff.create({ idNasa, camera, img_src, earth_date });
  return result;
};

export const updateStaff = async (id, data) => {
  const result = await Staff.update(
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

export const removeStaff = async (id) => {
  await Staff.destroy({
    where: {
      id,
    },
  });
  return true;
};
