import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import {PacientesModule} from './Pacientes/pacientes.module';
import { Paciente } from './Pacientes/pacientes.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'b122y',
        password: '123',
        database: 'b122y',
        entities: [Paciente],
        synchronize: true,
    }),
    PacientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
