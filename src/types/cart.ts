import { ProductProps } from './product';
export type CartProps = {
  items: ProductProps[];
};

export interface CartState {
  readonly loading: boolean;
  readonly data: CartProps;
  readonly errors?: string;
}
