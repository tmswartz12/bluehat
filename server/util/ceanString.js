const cleanString = (str) => {
  let cleaned = str.replace(/[^a-zA-Z ]/g, "");
  return cleaned;
};

module.exports = { cleanString };
