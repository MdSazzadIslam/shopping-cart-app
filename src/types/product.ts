/** The basic structure of a product */
export type ProductProps = {
  id: string;
  name: string;
  coverage: string;
  risk: string;
  price: number;
  image: string;
  description: string;
};

export interface ProductState {
  readonly loading: boolean;
  readonly data: ProductProps[];
  readonly errors?: string;
}
