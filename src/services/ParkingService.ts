import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { client } from "../../database/db";
import { Parkin } from "../models/Parking";
import { VacanciesServices } from "./VacanciesService";
import { CarsServices } from "./CarsServices";

dayjs.extend(utc);

class ParkingService {
    async create(entry_time: Date, exit_time: Date, car_id: string, vacancy_id: string): Promise<void>{
        const VALORPERHOUR = 20; // Value per 1h on parking
        const OPENINGTIME = 9;
        const CLOSETIME = 18;
        
        const vacancyService = new VacanciesServices();
        const carsService = new CarsServices();

        const carID = carsService.findByID(car_id);
        const vacancyID = vacancyService.findByID(vacancy_id);

        if (!carID || !vacancyID) {
            throw new Error("Not exist this Car ID or not exist this Vacancy ID!");
        }

        const entryHour = this.verifyEntryTime(entry_time);
        const exitHour = this.verifyExitTime(exit_time);

        if (entryHour < OPENINGTIME || exitHour > CLOSETIME){
            throw new Error("Entry time or exit time is outside opening hours!");
        }

        const compare = this.compareHours(
            entry_time,
            exit_time
        );

        if (compare <= 0) {
            throw new Error("The exit_time is lower or equal the entry_time!");
        }
        
        const parking = new Parkin();

        parking.entry_time = entry_time;
        parking.exit_time = exit_time;
        parking.value = compare * VALORPERHOUR;
        parking.fk_car_id = car_id;
        parking.fk_vacancy_id = vacancy_id;

        const query = "INSERT INTO parking (id, entry_time, exit_time, value, fk_car_id, fk_vacancy_id) VALUES ($1, $2, $3, $4, $5, $6)";
        const values = [parking.id, parking.entry_time, parking.exit_time, parking.value, parking.fk_car_id, parking.fk_vacancy_id];

        await client
            .query(query, values)
            .then(() => console.log("Parking was created!"))
            .catch((error) => console.error(error));

        await vacancyService.updateAvailableVacancy(vacancy_id);
    }

    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }

    compareHours(start_date: Date, end_date: Date): number{
        const start_date_utc = this.convertToUTC(start_date);
        const end_date_utc = this.convertToUTC(end_date);

        return dayjs(end_date_utc).diff(start_date_utc, "hours");
    }

    verifyEntryTime(entry_time: Date): number{
        const entryHour = dayjs(entry_time).get("hour");
        return entryHour;
    }

    verifyExitTime(exit_time: Date): number{
        const exitHour = dayjs(exit_time).get("hour");
        return exitHour;
    }
}

export { ParkingService };