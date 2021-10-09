/** The basic structure of a product */
export type ProductProps = {
  id: string;
  name: string;
  minCoverage: number;
  maxCoverage: number;
  risk: number;
  price: number;
  image: string;
  description: string;
};

export interface ProductState {
  readonly loading: boolean;
  readonly data: ProductProps[];
  readonly errors?: string;
}
