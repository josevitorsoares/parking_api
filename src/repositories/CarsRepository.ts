
export interface ICars{
    create(owner: string, license_plate: string, telephone: string): Promise<void>;
    findByID(id: string): Promise<void>;
    verifyLicensePlate(license_plate: string): Promise<void>
}