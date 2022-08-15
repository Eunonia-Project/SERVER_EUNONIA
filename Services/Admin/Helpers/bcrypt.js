require('dotenv').config({path:'.env'})
const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    const result = bcrypt.hashSync(password, +process.env.SALT_ROUNDS); 
    return result;
}

const comparePassword = (password, hash) => {
    const result = bcrypt.compareSync(password, hash);
    return result;
}

module.exports = {
    hashPassword,
    comparePassword
}