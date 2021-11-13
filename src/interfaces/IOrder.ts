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

export enum PromoEnum {
	'MARKET_COUPON',
	'MARKET_DEAL',
	'MARKET_COIN',
}

export enum VAT {
	'NO_VAT',
	'VAT_0',
	'VAT_10',
	'VAT_10_110',
	'VAT_18',
	'VAT_18_118',
	'VAT_20',
	'VAT_20_120',
}

export interface IPromo {
	marketPromoId: string;
	subsidy: number;
	type: PromoEnum;
}
export interface IItem {
	id: number;
	feedId: number;
	offerId: string;
	price: number;
	'buyer-price': number;
	subsidy: number;
	count: number;
	delivery: boolean;
	params: string;
	vat: VAT;
	fulfilmentShopId: number;
	sku: string;
	shopSku: string;
	warehouseId: number;
	partnerWarehouseId: string;
	promos: IPromo[];
}

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

enum Currency {
	'RUR',
}
enum PaymentType {
	'PREPAID',
	'POSTPAID',
}
enum PaymentMethod {
	'YANDEX',
	'APPLE_PAY',
	'GOOGLE_PAY',
	'CREDIT',
	'TINKOFF_CREDIT',
	'EXTERNAL_CERTIFICATE',
	'CARD_ON_DELIVERY',
	'CASH_ON_DELIVERY',
}
enum TaxSystem {
	'ECHN',
	'ENVD',
	'OSN',
	'PSN',
	'USN',
	'USN_MINUS_COST',
}

export interface IOrder {
	currency: Currency;
	fake: boolean;
	id: number;
	paymentType: PaymentType;
	paymentMethod: PaymentMethod;
	taxSystem: TaxSystem;
	items: IItem[];
	notes: string;
}
