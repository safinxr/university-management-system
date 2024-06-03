import "dotenv/config";

console.log(process.env.PORT);

export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
  default_pass: process.env.DEFAULT_PASS,
  bcrypt_sult_rounds: process.env.BCRYPT_SULT_ROUNDS,
};
