import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
  CLIENT = 'client',
  VENDOR = 'vendor',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // ✅ SQLite ne supporte pas enum, on utilise text avec default
  @Column({ type: 'text', default: UserRole.CLIENT })
  role: UserRole;
}
