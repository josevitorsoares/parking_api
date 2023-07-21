
export interface IParking{
    create(car_id: string, vacancy_id: string): Promise<void>;
    unparking(vacancy_id: string): Promise<void>;
    verifyVacancyIdParking(vacancy_id: string): Promise<void>;
    verifyCarIdParking(car_id: string): Promise<void>;
    getEntryTimeParking(parking_id: string): Promise<void>;
    updateValueAndExitTimeParking(parking_id: string, value: number, exit_time: Date): Promise<void>;
    getCurrentDate(): Date;
    getHour(timestamp: Date): number;
    convertToUTC(date: Date): string;
    compareInHours(star_date: Date, end_date: Date): number;
}