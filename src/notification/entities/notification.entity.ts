import { HasTimestamps } from 'src/database/interfaces/HasTimestamps';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { INotification } from '../interfaces/notification.interface';

@Entity()
export class Notification extends HasTimestamps implements INotification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
