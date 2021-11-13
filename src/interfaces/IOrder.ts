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
interface IBoxItem {
	id: number;
	count: number;
}
interface IBoxes {
	id: number;
	weight: number;
	height: number;
	depth: number;
	items: IBoxItem[];
}

export interface IShipment {
	id: number;
	shipmentDate: Date;
	boxes: IBoxes;
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
enum OrderStatus {
	'CANCELLED',
	'DELIVERED',
	'DELIVERY',
	'PICKUP',
	'PROCESSING',
	'PENDING',
}

enum OrderSubStatus {
	'STARTED',
	'ANTIFRAUD',
	'DELIVERY_SERVICE_UNDELIVERED',
	'PENDING_EXPIRED',
	'PROCESSING_EXPIRED',
	'REPLACING_ORDER',
	'RESERVATION_EXPIRED',
	'RESERVATION_FAILED',
	'SHOP_FAILED',
	'SHOP_PENDING_CANCELLED',
	'WAREHOUSE_FAILED_TO_SHIP',
	'USER_CHANGED_MIND',
	'USER_NOT_PAID',
	'USER_REFUSED_DELIVERY',
	'USER_REFUSED_PRODUCT',
	'USER_REFUSED_QUALITY',
	'USER_UNREACHABLE',
	'PICKUP_SERVICE_RECEIVED',
	'PICKUP_USER_RECEIVED',
}

interface IInstance {
	cis: string;
}

interface IOrderStatusItem extends IItem {
	instances: IInstance[];
}

export interface IOrder {
	currency: Currency;
	fake: boolean;
	id: number;
	paymentType: PaymentType;
	paymentMethod: PaymentMethod;
	taxSystem: TaxSystem;
	delivery: IDelivery;
	items: IItem[];
	notes: string;
}

export interface IOrederStatus extends IOrder {
	creationDate: Date;
	itemsTotal: number;
	status: OrderStatus;
	substatus: OrderSubStatus;
	total: number;
	subsidyTotal: number;
	items: IOrderStatusItem[];
}
