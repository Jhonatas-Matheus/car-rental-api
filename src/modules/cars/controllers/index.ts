import { CategoriesRepository } from "../repositories/categories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = new CategoriesRepository();

const createCategoryController = new CreateCategoryController(
  categoriesRepository
);

export { createCategoryController };
