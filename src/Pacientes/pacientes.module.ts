import { Module } from '@nestjs/common';
import { PacientesController } from './pacientes.controller';
import {PacientesService} from './pacientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './pacientes.entity';
import { PacientesDao } from './dao/PacientesImplementation.dao';


@Module({
    imports: [TypeOrmModule.forFeature([Paciente])],
    controllers: [PacientesController ],
    providers: [PacientesService, PacientesDao],
})
export class PacientesModule {}
