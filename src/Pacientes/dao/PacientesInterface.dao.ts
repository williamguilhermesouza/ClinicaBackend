import { Paciente } from '../pacientes.entity';

export interface PacientesDaoInterface {
    create(paciente: Paciente): Promise<Paciente>;
    update(id: number, paciente: Paciente): Promise<{}>;
    findOne(id: number): Promise<Paciente>;
    delete(id: number): Promise<{}>;
    findAll():Promise<Paciente[]>;
}
