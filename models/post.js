import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import AutoIncrement from 'mongoose-sequence';

const postSchema = new Schema({
    title: String,
    content: String
})
postSchema.plugin(AutoIncrement(mongoose), { inc_field: 'index' });




const post = mongoose.model('post', postSchema);
export default post;