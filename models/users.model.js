const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "shuvadip roy",
    email: "shuvadip123@gmail.com",
  },
  {
    id: uuidv4(),
    username: "nasu",
    email: "nasu@gmail.com",
  },
  {
    id: uuidv4(),
    username: "keltu da",
    email: "keltu@gmail.com",
  },
];
module.exports = users;
