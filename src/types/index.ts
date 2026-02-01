export interface Tool {
    id: number;
    slug: string;
    name: string;
    category: string;
    price: number;
    image: string;
    stock: number;
    description: string;
    specs: string[];
    rating: number;
    reviews: number;
    isBestSeller?: boolean;
    isPromo?: boolean;
}

export interface CartItem {
    tool: Tool;
    quantity: number;
    days: number;
}

export interface Testimonial {
    name: string;
    role: string;
    comment: string;
    avatar: string;
    rating: number;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface CheckoutFormData {
    name: string;
    phone: string;
    startDate: string;
    endDate: string;
    notes: string;
}
