import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from '../pacientes.entity';

@Injectable()
export class PacientesModel {
    constructor (
        @InjectRepository(Paciente)
        private readonly pacienteRepository: Repository<Paciente>,
    ) {}

    async __save(paciente: Paciente): Promise<Paciente> {
        return await this.pacienteRepository.save(paciente);
    }

    async __update(id: number, paciente: Paciente): Promise<{}> {
        return await this.pacienteRepository.update(id, paciente);
    }

    async __findOne(id: number): Promise<Paciente> {
        return await this.pacienteRepository.findOne(id);
    }

    async __delete(id: number): Promise<{}> {
        await this.pacienteRepository.delete(id);
        return {'msg': `Successfully deleted Paciente ${id}`};
    }

    async __findAll(): Promise<Paciente[]> {
        return this.pacienteRepository.find();
    }

}
