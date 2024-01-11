import { Sequelize } from "sequelize-typescript";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME ?? "",
  process.env.DB_USER ?? "postgres",
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);
