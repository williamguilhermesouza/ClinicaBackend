import { IsString } from 'class-validator';

export class QueryDto {
    @IsString()
    readonly nome: string;
}