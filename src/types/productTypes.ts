export type Product = {
    uid:number | undefined;
    image: string | undefined;
    description: string | undefined;
    category: string | undefined;
    price: number | undefined;
    rating: number | undefined;
}

// export type CartItem = {
//     uid:number;
//     image: string;
//     description: string;
//     price: number;
// }


//aqui hereda propiedades de otro type
export type CartItem = Pick<Product, 'uid' | 'image' | 'price' | 'description'>