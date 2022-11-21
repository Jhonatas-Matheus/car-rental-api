import { Router } from "express";

import { createCategoryController } from "../modules/cars/controllers";
import { CategoriesRepository } from "../modules/cars/repositories/categories/CategoriesRepository";
// import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});
categoriesRoutes.get("/", (req, res) => {
  const listOfCategorys = categoriesRepository.list();
  return res.status(200).json(listOfCategorys);
});
