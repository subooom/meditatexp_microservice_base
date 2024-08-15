export class CreateUserEvent {
  constructor(
    public readonly email: string,
    public readonly otp: number,
  ) {}
}
