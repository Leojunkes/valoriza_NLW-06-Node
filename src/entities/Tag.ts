import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity('tags')
class Tag {
    @PrimaryColumn()
    readonly id:string;
    @Column()
    name:string;
    @CreateDateColumn()
    createdAt:Date;
    @CreateDateColumn()
    updateAt:Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export {Tag}
