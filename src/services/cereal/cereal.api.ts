import { Cereal } from "src/data/cereal";

export abstract class CerealApi {
    abstract getCereals(): Cereal[];
}