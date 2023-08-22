import { Vacancies } from "../models/Vacancies";

export interface IVacanciesRepository{
    create(vacancy_number: string): Promise<void>;
    updateAvailableVacancy(vacancy_id: string, status: boolean): Promise<void>;
    findByID(id: string): Promise<Vacancies>;
    verifyAvailableVacancy(vacancy_id: string): Promise<Vacancies>;
    verifyAllAvailableVacancies(): Promise<number>;
    verifyVacancyNumber(vacancy_number: string): Promise<Vacancies>;
    listAvailableVacancies(): Promise<Vacancies[]>;
}