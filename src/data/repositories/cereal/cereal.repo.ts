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

    async createCereal(cereal: any): Promise<Cereal> {
        return cereal;
    }

    async deleteCereal(id: number): Promise<void> {
      const cereals = await this.parseCsv(path.join(__dirname, 'cereals.csv')) as Cereal[];

      const index = cereals.findIndex(cereal => cereal.id === id);
        if (index !== -1) {
            cereals.splice(index, 1);
        }
      
      const csvContent = cereals.reduce((csv, row) => {
        return csv + Object.values(row).join(',') + '\n';
      }, 'id,name,manufacturer,type,flavor\n')
      
      fs.writeFileSync(path.join(__dirname, 'cereals.csv'), csvContent);
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
