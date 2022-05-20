// Database Connect Function

const mongoose = require("mongoose");

const databaseConnect = () => {
      mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
      .then(()=>{console.log("Veritabanı bağlantısı gerçekleşti.")})
      .catch((err)=>{console.log(err)})
}

module.exports = databaseConnect;
