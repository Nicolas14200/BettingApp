import { load } from 'ts-dotenv';

export const env = load({
    PORT: Number,
    JWT_KEY: String
})