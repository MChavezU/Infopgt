import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  iduser: number;

  @Column({ length: 150 })
  ncompleto: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 80, unique: true })
  email: string;

  @Column({ length: 40 }) // porque lo guardas con SHA (ej. SHA1 = 40 caracteres hex)
  password: string;

  @Column({ length: 15 })
  telefono: string;

  @Column()
  fecha: Date;

  @Column({ type: 'tinyint', default: 0 })
  isverified: number;

  @Column({ type: 'varchar', length: 40, nullable: true })
  veritoken: string | null;

   @Column({ type: 'tinyint', default: 1 })
  status: number;

  @Column({ type: 'tinyint', default: 1 })
  idrol: number;

  @Column({ type: 'tinyint', default: 1 })
  idinfopgt: number;

}