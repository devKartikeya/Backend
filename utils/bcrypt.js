var bcrypt = require("bcrypt");

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

async function verifyPassword(password, hash) {
  const isMatch = await bcrypt.compare(password, hash);

  if (!isMatch) {
    return { success: false };
  }
  return { success: true };
}

module.exports = { hashPassword, verifyPassword };
