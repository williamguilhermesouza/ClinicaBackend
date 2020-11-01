import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Paciente {
    @PrimaryColumn()
    ID: number;

    @Column()
    nome: string;

    @Column()
    sexo: string;

    @Column()
    estadocivil: string;

    @Column()
    email: string;

    @Column()
    endereco: string;

    @Column()
    nascimento: Date;

    @Column()
    profissao: string;

    @Column()
    telefone: string;

    @Column()
    peso: number;

    @Column()
    altura: number;

    @Column()
    queixa: string;

    @Column()
    doencaatual: string;

    @Column()
    doencapre: string;

    @Column()
    doencaassoc: string;

    @Column()
    historia: string;

    @Column()
    habitos: string;

    @Column()
    medicacoes: string;

    @Column()
    estado: string;

    @Column()
    pa: number;

    @Column()
    fc: number;

    @Column()
    fr: number;

    @Column()
    sp: number;

    @Column()
    Observacao: string;

}
