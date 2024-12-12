import { config as conf } from "dotenv";

conf();

const _config = {
  port: process.env.PORT,
  databaseURL: process.env.MONGO_URL,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  bcryptSaltRounds: process.env.BCRYPT_SALT_ROUNDS,
};

export const config = Object.freeze(_config);
