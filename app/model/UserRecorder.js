module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserRecorderSchema = new Schema({
    id: String,
    loginname_map: Object,
    email_map: Object,
    nickname_map: Object
  })
  return mongoose.model('UserRecorder', UserRecorderSchema)
}
