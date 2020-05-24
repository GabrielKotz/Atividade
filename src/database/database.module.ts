import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';

@Module({
    imports: [
        KnexModule.forRoot({
          config: {
            client: 'pgadmin',
            connection: {
              host: 'localhost',
              user: 'root',
              password: 'root',
              database: 'provv',
            },
          },
        }),
      ],
})
export class DatabaseModule {}
