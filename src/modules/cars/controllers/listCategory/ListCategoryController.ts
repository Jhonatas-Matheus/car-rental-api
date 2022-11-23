import { Request, Response } from "express";

import { ListCategoryService } from "../../services/ListCategoryService";

class ListCategoryController {
  constructor(private listCategoyService: ListCategoryService) {}
  handle(req: Request, res: Response): Response {
    return res.status(200).send(this.listCategoyService.execute());
  }
}

export { ListCategoryController };
