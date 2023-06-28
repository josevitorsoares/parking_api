import { client } from "../../database/db";
import { Cars } from "../models/Cars";

class CarsServices {
    async create(owner: string, license_plate: string, telephone: string): Promise<void>{
        const car = new Cars();

        const carLicensePlate = await this.verifyLicensePlate(license_plate);
        
        if (carLicensePlate) {
            throw new Error("There is already a car with this license plate!");
        }

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

    async verifyLicensePlate(license_plate: string){
        const query = "SELECT license_plate FROM cars WHERE license_plate = $1";

        const car = await client.query(query, [license_plate]);
        return car.rows[0];
    }
}

export { CarsServices };