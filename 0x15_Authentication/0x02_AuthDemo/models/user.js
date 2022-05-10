const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!']
    }
})

userSchema.statics.findAndValidateUser = async function (username, password) {
    const user = await this.findOne({ username }); // this refers to the particular model
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : false;
}

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model('User', userSchema);