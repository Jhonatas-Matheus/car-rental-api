import { CategoriesRepository } from "../../repositories/categories/CategoriesRepository";
import { ListCategoryService } from "../../services/ListCategoryService";
import { ListCategoryController } from "./ListCategoryController";

const categoryRepository = CategoriesRepository.getInstance();
const listCategoryService = new ListCategoryService(categoryRepository);
const listCategoryController = new ListCategoryController(listCategoryService);

export { listCategoryController };
