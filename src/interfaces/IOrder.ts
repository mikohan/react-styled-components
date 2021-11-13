export type deliveryPartnerType = 'YANDEX_MARKET';
export type deliveryMethod = 'DELIVERY' | 'PICKUP' | 'POST';
export enum RegionEnum {
	'CITY',
	'CITY_DISTRICT',
	'CONTINENT',
	'COUNTRY',
	'COUNTRY_DISTRICT',
	'METRO_STATION',
	'MONORAIL_STATION',
	'OTHERS_UNIVERSAL',
	'OVERSEAS_TERRITORY',
	'REGION',
	'SECONDARY_DISTRICT',
	'SETTLEMENT',
	'SUBJECT_FEDERATION',
	'SUBJECT_FEDERATION_DISTRICT',
	'SUBURB',
	'VILLAGE',
}

export interface IOrderBase {}

export interface IShipment {
	id: number;
	shipmentDate: Date;
}

export interface IRegion {
	id: number;
	name: string;
	type: RegionEnum;
	parent: IRegion;
}

export interface IDelivery {
	deliveryPartnerType: deliveryPartnerType;
	deliveryServiceId: number;
	id: string;
	shipments: IShipment[];
	serviceName: string;
	type: deliveryMethod;
	region: IRegion;
}

//   shipments:
//   [
//     {
//       "id": {int64},
//       "shipmentDate": "{date}"
//     },
//     ...
//   ],
//   "serviceName": "{string}",
//   "type": "{enum}",
//   "region":
//   {
//     "id": {int32},
//     "name": "{string}",
//     "type": "{enum}",
//     "parent":
//     {
//       "id": {int32},
//       "name": "{string}",
//       "type": "{enum}",
//       "parent":
//       {
//         ...
//       }
//     }
//   }
// },

// const order = {
//   "order":
//   {
//     "currency": "{enum}",
//     "fake": {boolean},
//     "id": {int64},
//     "paymentType": "{enum}",
//     "paymentMethod": "{enum}",
//     "taxSystem": "{enum}",
//     "items":
//     [
//       {
//         "id": {int64},
//         "feedId": {int64},
//         "offerId": "{string}",
//         "price": {double},
//         "buyer-price": {double},
//         "subsidy": {double},
//         "count": {int32},
//         "delivery": {boolean},
//         "params": "{string}",
//         "vat": "{enum}",
//         "fulfilmentShopId": {int64},
//         "sku": "{string}",
//         "shopSku": "{string}",
//         "warehouseId": {int64},
//         "partnerWarehouseId": "{string}"
//         "promos":
//         [
//           {
//             "marketPromoId": "{string}",
//             "subsidy": {float},
//             "type": "{enum}",
//           },
//           ...
//         ]
//       },
//       ...
//     ],
//     "notes": "{string}"
//   }
// }
