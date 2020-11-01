import { PacientesModel } from './PacientesModel.dao';
import { Paciente } from '../pacientes.entity';
import {PacientesDaoInterface} from './PacientesInterface.dao';

export class PacientesDao extends PacientesModel implements PacientesDaoInterface {
    async create(paciente: Paciente): Promise<Paciente> {
        return this.__save(paciente);
    }

    async update(id: number, paciente: Paciente): Promise<{}> {
        return this.__update(id, paciente);
    }

    async findOne(id: number): Promise<Paciente> {
        return this.__findOne(id);
    }

    async delete(id: number): Promise<{}> {
        return this.__delete(id);
    }

    async findAll(): Promise<Paciente[]> {
        return this.__findAll();
    }
}
