import { Injectable } from '@nestjs/common';
import { Paciente } from './pacientes.entity';
import { PacientesDao } from './dao/PacientesImplementation.dao';

@Injectable()
export class PacientesService {
    constructor(
        private readonly pacientesDao: PacientesDao,
    ) {}

    async findAll(): Promise<Paciente[]> {
        return await this.pacientesDao.findAll();
    }

    async create(paciente: Paciente): Promise<Paciente> {
        return await this.pacientesDao.create(paciente);
    }

    async update(id: number, paciente: Paciente): Promise<{}> {
        return await this.pacientesDao.update(id, paciente);
    }

    async delete(id: number): Promise<{}> {
        return await this.pacientesDao.delete(id);
    }

    async findOne(id: number): Promise<Paciente> {
        return await this.pacientesDao.findOne(id);
    }

    async findByName(name): Promise<Paciente[]> {
        console.log(name);
        return await this.pacientesDao.find(name);
    }

}
