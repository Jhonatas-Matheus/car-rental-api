import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/specifications/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

export const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ name, description });
  return res.status(201).json({ message: "Specification created" });
});

specificationsRoutes.get("/", (req, res) => {
  const listOfSpecifications = specificationsRepository.list();
  return res.status(200).json(listOfSpecifications);
});
