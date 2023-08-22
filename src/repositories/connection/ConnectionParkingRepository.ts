import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { client } from "../../../database/db";
import { Parking } from "../../models/Parking";
import { IParkingRepository } from "../ParkingRepository";
import { VacanciesRepository } from "./ConnectionVacanciesRepository";
import { AppError } from "../../http/middlwares/AppError";

dayjs.extend(utc);

export class ParkingsRepository implements IParkingRepository {
    async create(car_id: string, vacancy_id: string): Promise<void> {
        try {
            const parking = new Parking();

            parking.entry_time = this.getCurrentDate();
            parking.value = 0;
            parking.car_id = car_id;
            parking.vacancy_id = vacancy_id;

            const query = "INSERT INTO parking (id, entry_time, value, car_id, vacancy_id) VALUES ($1, $2, $3, $4, $5)";
            const values = [parking.id, parking.entry_time, parking.value, parking.car_id, parking.vacancy_id];

            await client.query(query, values).then(() => console.log("Parking was created!")).catch((error) => console.error(error));
        } catch (error) {
            throw new AppError(`Error creating Parking: ${error}`);
        }
    }

    async unparking(vacancy_id: string): Promise<void>{
        try {
            const vacancyRepository = new VacanciesRepository();
        
            await vacancyRepository.updateAvailableVacancy(vacancy_id, true);
        } catch (error) {
            throw new AppError(`Error creating Parking: ${error}`);
        }
    }

    async verifyVacancyIdParking(vacancy_id: string): Promise<Parking> {
        const vacancy = "SELECT id FROM parking WHERE vacancy_id = $1 AND value = 0";

        const parking = await client.query(vacancy, [vacancy_id]);
        return parking.rows[0];
    }

    async verifyCarIdParking(car_id: string): Promise<Parking> {
        const car = "SELECT id FROM parking WHERE car_id = $1 AND value = 0";

        const parking = await client.query(car, [car_id]);
        return parking.rows[0];
    }

    async getEntryTimeParking(parking_id: string): Promise<Date> {
        const query = "SELECT entry_time FROM parking WHERE id = $1";

        const parking = await client.query(query, [parking_id]);
        return parking.rows[0].entry_time;
    }

    async updateValueAndExitTimeParking(parking_id: string, value: number, exit_time: Date) {
        try {
            const query = "UPDATE parking SET value = $1, exit_time = $2 WHERE id = $3";
            const values = [value, exit_time, parking_id];
        
            await client.query(query, values).then(() => console.log("Parking was updated!")).catch((error) => console.error(error));
        } catch (error) {
            throw new AppError(`Error updating Parking: ${error}`);
        }
    }

    async sumAmountOnDay(): Promise<number> {
        const currentDate = this.getCurrentDate();

        const query = "SELECT SUM(value) FROM parking WHERE DATE(exit_time) = DATE($1)";

        const parking = await client.query(query, [currentDate]);
        return parking.rows[0];
    }

    async listActiveParkings(): Promise<Parking[]> {
        const query = "SELECT * FROM parking WHERE value = 0";

        const parking = await client.query(query);
        return parking.rows;
    }

    async listAllParkings(): Promise<Parking[]>{
        const query = "SELECT * FROM parking";

        const parkings = await client.query(query);
        return parkings.rows;
    }

    getCurrentDate(): Date {
        return dayjs().toDate();
    }

    getHour(timestamp: Date): number {
        return dayjs(timestamp).get("hour");
    }

    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }

    compareInHours(star_date: Date, end_date: Date): number {
        const start_date_utc = this.convertToUTC(star_date);
        const end_date_utc = this.convertToUTC(end_date);

        return dayjs(end_date_utc).diff(start_date_utc, "hours");
    }
}