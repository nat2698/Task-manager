import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
  } from "sequelize-typescript";
import Project from "./Project";


interface TaskI {
    id?: number;
    name: string;
    done?: boolean;
    projectId?: number;
}

@Table({modelName: "tasks"})
export default class Task extends Model<TaskI>{
    @PrimaryKey
    @AutoIncrement
    @Column({allowNull: false, defaultValue: 0})
    readonly id!: number;

    @Column({allowNull: false, defaultValue: ''})
    name!: string;

    @Column({allowNull: false, defaultValue:false})
    done!: boolean;

    @ForeignKey(() => Project)
    @Column({allowNull: false, defaultValue: 0})
    projectId!: number;
    
    @BelongsTo(() => Project)
    project!: Project;

}

