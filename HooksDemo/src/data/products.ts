
export type Product = {
    id: number;
    name: string;
    price: number;
    short: string;
    description: string;
    image?: string;
}


export const products: Product[] = [
    { id: 1, name: 'laptop', price: 799, short: 'Thin & powerful', description: 'A lightweight laptop with 8GB RAM, 256GB SSD and an excellent battery life for daily productivity.'},
    { id: 2, name: 'mobile', price: 499, short: 'Sleek smartphone', description: 'Modern smartphone with a crisp display and capable camera for everyday use.' },
    { id: 3, name: 'headphones', price: 129, short: 'Noise isolating', description: 'Comfortable over-ear headphones with good sound and passive noise isolation.' },
    { id: 4, name: 'bluthood speaker', price: 89, short: 'Portable sound', description: 'Compact bluetooth speaker with surprising bass and long playtime.' },
    { id: 5, name: 'speaker', price: 59, short: 'Home speaker', description: 'Affordable speaker for casual listening around the house.' },
    { id: 6, name: 'bluethooth headphones', price: 199, short: 'Wireless', description: 'Wireless headphones with long battery life and crisp audio.' },
    { id: 7, name: 'hair dryer', price: 39, short: 'Fast drying', description: 'Lightweight hair dryer with two heat settings and a compact design.' },
    { id: 8, name: 'hair straighner', price: 45, short: 'Salon results', description: 'Ceramic plates for smooth styling and quick heat-up.' }
];

export default products;
