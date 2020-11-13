import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { Paciente } from './pacientes.entity';
import { CreatePacienteDto } from './dto/create-pacientes.dto';
import { QueryDto } from './dto/query.dto';

@Controller('pacientes')
export class PacientesController {
    constructor(private readonly pacientesService: PacientesService) {}

    @Get()
    async findAllPacientes(): Promise<Paciente[]> {
        return await this.pacientesService.findAll();
    }

    @Post('/create')
    async createPaciente(@Body() createPacienteDto: CreatePacienteDto): Promise<Paciente> {
        return await this.pacientesService.create(createPacienteDto);
    }

    @Post('/findbyname')
    async findByName(@Body() queryDto: QueryDto): Promise<Paciente[]> {
        return await this.pacientesService.findByName(queryDto);
    }

    @Put(':id')
    async updatePaciente(@Param() id, @Body() createPacienteDto: CreatePacienteDto): Promise<{}> {
        return await this.pacientesService.update(id, createPacienteDto);
    }

    @Delete(':id')
    async deletePaciente(@Param() id): Promise<{}> {
        return await this.pacientesService.delete(id);
    }

    @Get(':id')
    async findOne(@Param() id): Promise<Paciente> {
        return await this.pacientesService.findOne(id);
    }

}
