"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration = 5, educator, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
