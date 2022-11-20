import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/categories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });
  return res.status(201).json({ message: "Category created" });
});
categoriesRoutes.get("/", (req, res) => {
  const listOfCategorys = categoriesRepository.list();
  return res.status(200).json(listOfCategorys);
});
