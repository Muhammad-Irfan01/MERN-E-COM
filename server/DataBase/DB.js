const mongoose = require ('mongoose')
const Db = process.env.DB;

mongoose.connect(Db,{serverSelectionTimeoutMS : 3000}).then(()=> console.log('DB Connected Successfully')).catch((error)=> console.log('Error Connecting DB' + error.message))