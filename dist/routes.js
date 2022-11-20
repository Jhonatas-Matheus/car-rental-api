"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
const createCourse = (req, res) => {
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        educator: "Jhoantas",
        duration: 10,
    });
    CreateCourseService_1.default.execute({
        name: "NodeJS",
        educator: "Jhoantas",
    });
    return res.send();
};
exports.createCourse = createCourse;
