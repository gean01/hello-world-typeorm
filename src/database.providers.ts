import { DataSource } from "typeorm";
import { User } from "./entities/user.model";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'postgres',
    password: 'mysecretpassword',
    database: 'typeorm',
    entities: [User],
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: []
});
