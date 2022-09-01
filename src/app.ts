import { AppDataSource } from "./database.providers";
import { User } from "./entities/user.model";

async function main(){
    await AppDataSource.initialize();
    console.log('connected');
    
    const user: User = new User();
    user.name = 'John';
    await user.save();
}

main();
