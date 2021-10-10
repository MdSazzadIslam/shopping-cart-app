/**
 * The basic structure of a product
 * */
export type ProductProps = {
  id: string;
  name: string;
  minCoverage: number;
  maxCoverage: number;
  risk: number;
  price: number;
  qty: number;
  image: string;
  description: string;
};
/**
 * defining state property types
 */
export interface ProductState {
  readonly loading: boolean;
  readonly data: ProductProps[];
  readonly errors?: string;
}
