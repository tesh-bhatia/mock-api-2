import { Cereal } from "src/data/cereal";

export abstract class CerealRepoApi {
    abstract getAllCereals(): Promise<Cereal[]>;
    abstract createCereal(cereal: any): Cereal;
    abstract deleteCereal(id: number): void;
}