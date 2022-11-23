import { SpecificationsRepository } from "../../repositories/specifications/SpecificationsRepository";
import { ListSpecificationService } from "../../services/ListSpecificationService";
import { ListSpecificationController } from "./ListSpecificationController";

const specificationRepository = SpecificationsRepository.getInstance();

const listSpecificationsService = new ListSpecificationService(
  specificationRepository
);

const listSpecificationController = new ListSpecificationController(
  listSpecificationsService
);
export { listSpecificationController };
