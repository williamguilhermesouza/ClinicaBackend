import { Injectable } from '@nestjs/common';

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
