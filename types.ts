export type Producto = {
    name: string;
    stock: number;
    description: string;
    price: number;
    id:string;
};

export type Cliente = {
    name: string;
    cif: string;
    id: string;
}

export type Invoice = {
    idClient: string;
    products: Producto[];
    total: number;
    id: string;
}