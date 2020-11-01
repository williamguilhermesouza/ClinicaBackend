import { Injectable } from '@nestjs/common';
import { Paciente } from './pacientes.entity';
import { PacientesDao } from './dao/PacientesImplementation.dao';

@Injectable()
export class PacientesService {
    findAll(): string {
        return 'findall';
    }

    create(): string {
        return 'create';
    }

    update(id: number): string {
        return 'update';
    }

    delete(id: number): string {
        return 'delete';
    }

    findOne(id: number): string {
        return `${id}`;
    }

}
