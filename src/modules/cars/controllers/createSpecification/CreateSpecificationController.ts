import { Request, Response } from "express";

import { CreateSpecificationService } from "../../services/CreateSpecificationService";

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationService) {}
  handle(req: Request, res: Response) {
    const { name, description } = req.body;
    const specifications = this.createSpecificationService.execute({
      name,
      description,
    });
    return res.status(201).json({
      message: "Specification successfully registered",
    });
  }
}
export { CreateSpecificationController };
