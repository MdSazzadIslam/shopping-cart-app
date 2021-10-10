import { ProductProps } from './product';
export type CartProps = {
  userId: string;
  items: ProductProps[];
};

export interface CartState {
  readonly loading: boolean;
  readonly data: CartProps;
  readonly errors?: string;
}
