import { Module } from '@nestjs/common';

import { controllers } from './controllers';
import { providers } from './services';
import { repos } from './data/repositories';

@Module({
  imports: [],
  controllers,
  providers: [...providers, ...repos],
})
export class AppModule {}
