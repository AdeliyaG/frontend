export interface IProduct {
  id: number;
  name: string;
  count?: number;
  done?: boolean;
}

export interface IProductListProps {
  products: IProduct[];
  isActive: boolean;
}

export interface IProductsState {
  isLoading: boolean;
  allProducts: IProduct[];
  productList: IProduct[];
}

export interface IListType {
  type: 'all' | 'active';
}