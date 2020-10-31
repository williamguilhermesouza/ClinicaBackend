import { Controller, Get, Put, Post, Delete, Param } from '@nestjs/common';
import { PacientesService } from './pacientes.service';

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly pacientesService: PacientesService) {}

    @Get()
    findAllPacientes(): string {
        return this.pacientesService.findAll();
    }

    @Post('/create')
    createPaciente(): string {
        return this.pacientesService.create();
    }

    @Put(':id')
    updatePaciente(@Param() id): string {
        return this.pacientesService.update(id);
    }

    @Delete(':id')
    deletePaciente(@Param() id): string {
        return this.pacientesService.delete(id);
    }

    @Get(':id')
    findOne(@Param() id): string {
        return this.pacientesService.findOne(id);
    }

}
