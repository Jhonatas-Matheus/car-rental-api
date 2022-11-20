import { CategoriesRepository } from "../repositories/categories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/categories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
// Nosso service não precisa conhecer nosso response
// Nosso service não precisa conhecer nosso repositório pois o service é a camada de alto nível
// Para o service é indiferente qual banco de dados que nós estamos utilizando;
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }
    this.categoriesRepository.create({ name, description });
  }
}
export { CreateCategoryService };
