import fs from "fs";

const DB_PATH = "./db.json";

export const readDB = () => {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
};

export const writeDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};