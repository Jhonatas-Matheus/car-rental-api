import { Request, response, Response } from "express";

import { ICategoriesRepository } from "../repositories/categories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryController {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  private execute({ description, name }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }
    console.log({ name, description });
    this.categoriesRepository.create({ name, description });
  }
  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    this.execute({ name, description });
    return res.status(201).send(this.categoriesRepository);
  }
}
export { CreateCategoryController };
