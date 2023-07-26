import { Vacancies } from "../models/Vacancies";

export interface IVacancies{
    create(vacancy_number: string): Promise<void>;
    updateAvailableVacancy(vacancy_id: string, status: boolean): Promise<void>;
    findByID(id: string): Promise<Vacancies>;
    verifyAvaliableVacancy(vacancy_id: string): Promise<Vacancies>;
    verifyAllAvailableVacancies(): Promise<number>;
    verifyVacancyNumber(vacancy_number: string): Promise<Vacancies>; 
}