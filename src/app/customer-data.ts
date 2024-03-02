export interface CustomerData {
    shippingAddress: ShippingAddress;
}

export interface ShippingAddress {
    details: string;
    phone: string;
    city: string;
}
