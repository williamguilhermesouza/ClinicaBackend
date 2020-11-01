import { IsInt, IsString, IsNumber, IsDate } from 'class-validator';

export class CreatePacienteDto {
    @IsInt()
    readonly ID: number;
    @IsString()
    readonly nome: string;
    @IsString()
    readonly sexo: string;
    @IsString()
    readonly estadocivil: string;
    @IsString()
    readonly email: string;
    @IsString()
    readonly endereco: string;
    @IsDate()
    readonly nascimento: Date;
    @IsString()
    readonly profissao: string;
    @IsString()
    readonly telefone: string;
    @IsNumber()
    readonly peso: number;
    @IsNumber()
    readonly altura: number;
    @IsString()
    readonly queixa: string;
    @IsString()
    readonly doencaatual: string;
    @IsString()
    readonly doencapre: string;
    @IsString()
    readonly doencaassoc: string;
    @IsString()
    readonly historia: string;
    @IsString()
    readonly habitos: string;
    @IsString()
    readonly medicacoes: string;
    @IsString()
    readonly estado: string;
    @IsNumber()
    readonly pa: number;
    @IsNumber()
    readonly fc: number;
    @IsNumber()
    readonly fr: number;
    @IsNumber()
    readonly sp: number;
    @IsString()
    readonly observacao: string;
}
