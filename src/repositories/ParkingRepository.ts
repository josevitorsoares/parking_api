import { Parking } from "../models/Parking";

export interface IParkingRepository{
    create(car_id: string, vacancy_id: string): Promise<void>;
    unparking(vacancy_id: string): Promise<void>;
    verifyVacancyIdParking(vacancy_id: string): Promise<Parking>;
    verifyCarIdParking(car_id: string): Promise<Parking>;
    getEntryTimeParking(parking_id: string): Promise<Date>;
    updateValueAndExitTimeParking(parking_id: string, value: number, exit_time: Date): Promise<void>;
    sumAmountOnDay(): Promise<number>;
    listActiveParkings(): Promise<Parking[]>;
    listAllParkings(): Promise<Parking[]>;
    getCurrentDate(): Date;
    getHour(timestamp: Date): number;
    convertToUTC(date: Date): string;
    compareInHours(star_date: Date, end_date: Date): number;
}