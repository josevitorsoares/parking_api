export interface IVacancies{
    create(vacancy_number: string): Promise<void>;
    updateAvailableVacancy(vacancy_id: string, status: boolean): Promise<void>;
    findByID(id: string): Promise<void>;
    verifyAvaliableVacancy(vacancy_id: string): Promise<void>;
    verifyAllAvailableVacancies(): Promise<number>;
    verifyVacancyNumber(vacancy_number: string): Promise<void>; 
}