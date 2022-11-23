import { Specification } from "../model/Specifications";
import { ISpecificationsRepository } from "../repositories/specifications/ISpecificationsRepository";

class ListSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}
export { ListSpecificationService };
