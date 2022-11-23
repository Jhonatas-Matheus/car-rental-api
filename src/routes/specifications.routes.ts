import { Router } from "express";

import { createSpecificationController } from "../modules/cars/controllers/createSpecification";
import { listSpecificationController } from "../modules/cars/controllers/listSpecification";
import { SpecificationsRepository } from "../modules/cars/repositories/specifications/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

export const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  createSpecificationController.handle(req, res);
});

specificationsRoutes.get("/", (req, res) => {
  listSpecificationController.handle(req, res);
});
