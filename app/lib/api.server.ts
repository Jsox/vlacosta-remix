import * as dotenv from 'dotenv';
dotenv.config();
export class api {
    // constructor() {}

    pe(): number {
        let a: number = 2;
        return a;
    }
}

const Api = new api();
export const fde = process.env.API_ADDRESS;
