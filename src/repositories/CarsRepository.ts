import { Cars } from "../models/Cars";

export interface ICars{
    create(owner: string, license_plate: string, telephone: string): Promise<void>;
    findByID(id: string): Promise<Cars>;
    verifyLicensePlate(license_plate: string): Promise<Cars>;
    listAllCars(): Promise<Cars[]>;
}