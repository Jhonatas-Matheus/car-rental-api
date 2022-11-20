import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export const createCourse = (req: Request, res: Response) => {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Jhoantas",
    duration: 10,
  });
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Jhoantas",
  });
  return res.send();
};
