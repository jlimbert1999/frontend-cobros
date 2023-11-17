export class CreateClientDto {
  static fromFormGroup(form: any) {
    return new CreateClientDto(
      form['firstname'],
      form['lastname'],
      form['dni'],
      form['phone'],
      form['middlename']
    );
  }
  constructor(
    public firstname: string,
    public lastname: string,
    public dni: number,
    public phone: number,
    public middlename: string
  ) {
  }
}
