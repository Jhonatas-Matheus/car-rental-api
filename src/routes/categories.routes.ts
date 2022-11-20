import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  if (categoriesRepository.findByName(name)) {
    return res.status(400).json({
      message: "Category already exists",
    });
  }
  categoriesRepository.create({ name, description });
  return res.status(201).json({ message: "Category created" });
});
categoriesRoutes.get("/", (req, res) => {
  const listOfCategorys = categoriesRepository.list();
  return res.status(200).json(listOfCategorys);
});

// Parei na aula 03
