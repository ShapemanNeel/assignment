"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSchema = void 0;
const mongoose = require("mongoose");
exports.EmployeeSchema = new mongoose.Schema({
    name: String,
    age: Number,
    salary: Number,
});
//# sourceMappingURL=employee.schema.js.map