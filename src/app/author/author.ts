export class Author {
  id: number;
  name: string;
  birthDate: any;
  image:string;
  description: string;

  constructor(
    id: number,
    name: string,
    birthDate: any,
    image: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.birthDate = birthDate;
  }
 }
