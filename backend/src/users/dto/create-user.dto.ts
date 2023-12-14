import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Username should be a string' })
  readonly username: string;

  @IsString({ message: 'Email should be a string' })
  readonly email: string;

  @IsString({ message: 'Password should be a string' })
  @Length(6, 20, {
    message:
      'Password should contain 6 symbols at least and 20 symbols at most',
  })
  readonly password: string;
}
