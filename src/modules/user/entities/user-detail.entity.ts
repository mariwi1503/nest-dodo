import { Exclude } from 'class-transformer';

export class UserDetail {
  @Exclude()
  password: string;
}
