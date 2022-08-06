const bcrypt = require('bcrypt');
const { env } = require('process');
const saltRounds = +env.SALT_ROUNDS;

const hashPassword = (password) => {
    const result = bcrypt.hashSync(password, saltRounds);
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