import { Specification } from "../../model/Specifications";

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationsDTO): void;
  list(): Specification[];
}

export { ISpecificationsRepository, ISpecificationsDTO };
