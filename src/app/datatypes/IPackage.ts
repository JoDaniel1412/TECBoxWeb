export interface IPackage {
  trackingId:number,
  products:[number, number],
  billId:number,
  state:string,
  routeId:number,
  departure:Date,
  arrive:Date,
  deliver:Date
}
