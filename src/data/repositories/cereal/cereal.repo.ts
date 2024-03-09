import { Injectable } from '@nestjs/common';
import { Cereal } from 'src/data/cereal';
import { CerealRepoApi } from './cereal.repo.api';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import * as path from 'path';

@Injectable()
export class CerealRepo implements CerealRepoApi {
    async getAllCereals(): Promise<Cereal[]> {
        const records = await this.parseCsv(path.join(__dirname, 'cereals.csv'));
        return records as Cereal[];

    }

    createCereal(cereal: any): Cereal {
        return cereal;
    }

    deleteCereal(id: number): void {
        const cereals: Cereal[] = [];
        fs.createReadStream('./cereals.csv')
            .pipe(csvParser())
            .on('data', (row) => {
                cereals.push(row);
            })
            .on('end', () => {
                // Find the cereal with the matching id and remove it
                const index = cereals.findIndex(cereal => cereal.id === id);
                if (index !== -1) {
                    cereals.splice(index, 1);
                }
                // Write the updated cereals back to the CSV file
                const csvWriter = csvParser();
                fs.createWriteStream('/path/to/your/csv/file.csv')
                    .pipe(csvWriter)
                    .on('finish', () => {
                        console.log('CSV file successfully updated.');
                    });
                csvWriter.write(cereals);
                csvWriter.end();
            });
    }

    parseCsv(filePath) {
      return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
          .pipe(csvParser())
          .on('data', (data) => results.push(data))
          .on('end', () => resolve(results))
          .on('error', (error) => reject(error));
      });
    }
}
