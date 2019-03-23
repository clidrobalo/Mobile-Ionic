export class Item {

  constructor (
      public uuid: string,
      public descricao: string,
      public photo: string,
      public tipo: string,
      public quantidade: string,
      public adquirido: boolean
  ) {

  }
}
