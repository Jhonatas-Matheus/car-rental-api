import { Category } from "../model/Category";

// DTO => Data transfer object: É um objeto que fica responsavel por tranferir dados entre uma classe e outra
interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }
  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const currentCategory = this.categories.find(
      (category) => category.name === name
    );
    return currentCategory;
  }
}

export { CategoriesRepository };
