import { client } from "../../database/db";
import { Cars } from "../models/Carros";

class CarsServices {
    async create(owner: string, license_plate: string, telephone: string): Promise<void>{
        const car = new Cars();

        car.owner = owner;
        car.license_plate = license_plate;
        car.telephone = telephone;

        const query = "INSERT INTO cars (id, owner, license_plate, telephone) VALUES ($1, $2, $3, $4)";
        const values = [car.id, car.owner, car.license_plate, car.telephone];

        await client
            .query(query, values)
            .then(() => console.log("Car was created"))
            .catch((error) => console.error(error));
    }
    
    async findByID(id: string) {
        const query = "SELECT id FROM cars WHERE id = $1";

        const car = await client.query(query, [id]);
        return car.rows[0];
    }
}

export { CarsServices };