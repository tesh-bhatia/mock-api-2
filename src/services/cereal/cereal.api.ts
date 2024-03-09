import { Cereal } from "src/data/cereal";

export abstract class CerealApi {
    abstract getCereal(): Promise<Cereal[]>;
    abstract createCereal(cereal: any): Cereal;
    abstract deleteCereal(id: number): void;
}