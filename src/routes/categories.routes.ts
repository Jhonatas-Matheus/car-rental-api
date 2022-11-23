import { Router } from "express";

import { listCategoryController } from "../modules/cars/controllers/listCategory";
import { createCategoryController } from "../modules/cars/controllers/createCategory";
import { CategoriesRepository } from "../modules/cars/repositories/categories/CategoriesRepository";
// import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});
categoriesRoutes.get("/", (req, res) => {
  return listCategoryController.handle(req, res);
});
