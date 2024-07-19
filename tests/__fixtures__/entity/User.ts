import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: bigint

  @Column()
  public name: string

  @CreateDateColumn()
  public createdAt: Date
  @UpdateDateColumn()
  public updatedAt: Date
}
