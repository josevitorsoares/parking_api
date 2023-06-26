import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { client } from "../../database/db";
import { Parkin } from "../models/Parking";
import { VacanciesServices } from "./VacanciesService";
import { CarsServices } from "./CarsServices";

dayjs.extend(utc);

class ParkingService {
    async create(entry_time: Date, exit_time: Date, car_id: string, vacancy_id: string): Promise<void> {
        const VALORPERHOUR = 20; // Value per 1h on parking
        const OPENINGTIME = 9; // Opening time
        const CLOSETIME = 18; // Closing time
        const ALLVACANCIES = 20; // Total parking vacancies

        const vacancyService = new VacanciesServices();
        const carsService = new CarsServices();

        const allAvailableVacancies = await vacancyService.verifyAllAvailableVacancies();

        if (allAvailableVacancies == ALLVACANCIES) {
            throw new Error("There are no vacancies available!")
        }

        const carID = await carsService.findByID(car_id);
        const vacancyID = await vacancyService.findByID(vacancy_id);

        if (!carID || !vacancyID) {
            throw new Error("Not exist this Car ID or not exist this Vacancy ID!");
        }

        const vacancyAvailable = await vacancyService.verifyAvaliableVacancy(vacancy_id);

        if (!vacancyAvailable) {
            throw new Error("This vacancy doesn't available!")
        }

        const currentDay = this.getCurrentDay();
        const entryDay = this.getEntryDay(entry_time);
        const exitDay = this.getExitDay(exit_time);

        if (entryDay != currentDay || exitDay != currentDay) {
            throw new Error("The day entered is different from the current day");
        }

        const entryHour = this.getEntryTime(entry_time);
        const exitHour = this.getExitTime(exit_time);

        if (entryHour < OPENINGTIME || exitHour > CLOSETIME) {
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

    compareHours(start_date: Date, end_date: Date): number {
        const start_date_utc = this.convertToUTC(start_date);
        const end_date_utc = this.convertToUTC(end_date);

        return dayjs(end_date_utc).diff(start_date_utc, "hours");
    }

    getEntryTime(entry_time: Date): number {
        return dayjs(entry_time).get("hour");;
    }

    getExitTime(exit_time: Date): number {
        return dayjs(exit_time).get("hour");
    }

    getEntryDay(entry_time: Date): number {
        return dayjs(entry_time).get("date");
    }

    getExitDay(exit_time: Date): number {
        return dayjs(exit_time).get("date");
    }

    getCurrentDay(): number {
        return dayjs().date();
    }

    getCurrentDate() {
        return dayjs().format('YYYY/MM/DD');
    }
}

export { ParkingService };