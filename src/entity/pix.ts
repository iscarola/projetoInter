import {Entity, 
        PrimaryGeneratedColumn, 
        JoinColumn,  
        Column,
        CreateDateColumn,
        ManyToOne,
        UpdateDateColumn
    } from "typeorm";

    import { User } from './User';

    @Entity()
    export class Pix {
        @PrimaryGeneratedColumn('uuid') // gerando id unico
        id:string;

        @Column()
        status: string;

        @ManyToOne(() => User, user => user.id)
        @JoinColumn()
        requestingUser: User;
    
        @ManyToOne(() => User, user => user.id, {nullable: true})
        @JoinColumn()
        payingUser: User;

        @Column()
        value:number;

        @CreateDateColumn() // o banco de dados vai gerar com a data em que o registro foi criado
        createdAt: Date 

        @UpdateDateColumn()
        updatedAt: Date

    }