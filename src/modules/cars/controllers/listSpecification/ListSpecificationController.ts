import { Request, Response } from "express";

import { ListSpecificationService } from "../../services/ListSpecificationService";

class ListSpecificationController {
  constructor(private listSpecificationService: ListSpecificationService) {}
  handle(req: Request, res: Response) {
    const specifications = this.listSpecificationService.execute();
    res.status(200).json(specifications);
  }
}
export { ListSpecificationController };
