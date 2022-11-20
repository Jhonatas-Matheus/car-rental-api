import { Specification } from "../../model/Specifications";
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ISpecificationsDTO): void {
    const specification = new Specification(); // Esse new Specification se dá por conta do contructor do model
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
  }
  list(): Specification[] {
    return this.specifications;
  }
}
export { SpecificationsRepository };
