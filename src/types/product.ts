export type ProductProps = {
  id: string;
  name: string;
  coverage: string;
  risk: string;
  price: number;
  image: string;
  description: string;
};

export type getProducts = () => void;
export type AddProduct = (newProduct: string) => void;
export type DeleteProduct = (id: string) => void;

export interface ProductState {
  readonly loading: boolean;
  readonly data: ProductProps[];
  readonly errors?: string;
}
