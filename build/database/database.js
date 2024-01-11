"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
require("dotenv/config");
exports.sequelize = new sequelize_typescript_1.Sequelize((_a = process.env.DB_NAME) !== null && _a !== void 0 ? _a : "", (_b = process.env.DB_USER) !== null && _b !== void 0 ? _b : "postgres", process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: "postgres",
});
