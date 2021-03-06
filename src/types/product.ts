/**
 * The basic structure of a product - single responsibility principle?
 * */
export type ProductProps = {
  id: string;
  name: string;
  minCoverage: number;
  maxCoverage: number;
  coverage: number;
  risk: number;
  price: number;
  unitPrice: number;
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
