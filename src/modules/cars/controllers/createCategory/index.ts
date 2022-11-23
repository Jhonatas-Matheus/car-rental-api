import { CategoriesRepository } from "../../repositories/categories/CategoriesRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController };
