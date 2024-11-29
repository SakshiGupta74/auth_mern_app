// config.js
import dotenv from 'dotenv';
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGO_CONN = process.env.MONGO_CONN;
// Add other variables as needed
