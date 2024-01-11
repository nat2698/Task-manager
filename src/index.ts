import app from "./app";
import { sequelize } from "./database/database";
import model from './models/index';
sequelize.addModels(model);

async function main() {
  try {
    await sequelize.sync({force:false});
    app.listen(3000);
    console.log("server is listening on 3000");
  } catch (error) {
    console.error('unable to connect to the database', error);
  }
}

main();
