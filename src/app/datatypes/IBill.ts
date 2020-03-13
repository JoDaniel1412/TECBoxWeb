export interface IBill {
  id:number,
  date:Date,
  clientId:number,
  packageId:number,
  totalPrice:number,
  individualPrices:[number, number]
}
