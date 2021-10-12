const express = require("express");
const { sequelize } = require("./models");
const app = express();
const db = require("./models");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function addData(){
    try {

        await sequelize.transaction(async (transactionInstance ) => {
      
          const user1 = await db.User.create({
            firstName: 'Nikhil',
            age: 21
          }, { transaction: transactionInstance });
      
          const user2 = await db.User.create({
            firstName: 'Kamli',
            age: 21
          }, { transaction: transactionInstance });  
        });
      } catch (error) {
      
        console.log(error);
      }
}

addData();

db.sequelize
  .sync()
  .then((result) => {
    app.listen(3000, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
