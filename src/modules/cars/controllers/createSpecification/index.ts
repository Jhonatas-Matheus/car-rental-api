import { SpecificationsRepository } from "../../repositories/specifications/SpecificationsRepository";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = SpecificationsRepository.getInstance();

const createSpecificationService = new CreateSpecificationService(
  specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export { createSpecificationController };
