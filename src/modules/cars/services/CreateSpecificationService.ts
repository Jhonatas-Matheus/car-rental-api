import { Specification } from "../model/Specifications";
import { ISpecificationsRepository } from "../repositories/specifications/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest): Specification[] {
    this.specificationRepository.create({
      name,
      description,
    });
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}
export { CreateSpecificationService };
