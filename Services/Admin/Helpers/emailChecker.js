const emailChecker = (email) => {
  const emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(email);
}

module.exports = emailChecker;