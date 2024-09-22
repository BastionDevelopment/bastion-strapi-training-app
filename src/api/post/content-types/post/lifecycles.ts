const readingTime = require("reading-time");

module.exports = {
  async beforeCreate(e) {
    console.log("### BEFORE CREATE ###");
    if (e.params.data.content) {
      e.params.data.reading_time = readingTime(e.params.data.content)?.text || null;
    }
  },

  async beforeUpdate(e) {
    console.log("### BEFORE UDATE ###");
    if (e.params.data.content) {
      e.params.data.reading_time = readingTime(e.params.data.content)?.text || null;
    }
  }
};