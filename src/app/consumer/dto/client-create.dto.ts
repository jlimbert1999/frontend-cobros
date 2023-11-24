import { action } from '../interfaces';

export class CreateClientDto {
  static fromFormGroup(form: any, actions: action[]) {
    return new CreateClientDto(
      form['firstname'],
      form['lastname'],
      form['dni'],
      form['phone'],
      form['middlename'],
      actions.map((action) => action._id)
    );
  }
  constructor(
    public firstname: string,
    public lastname: string,
    public dni: number,
    public phone: number,
    public middlename: string,
    public actions: string[]
  ) {}
}
