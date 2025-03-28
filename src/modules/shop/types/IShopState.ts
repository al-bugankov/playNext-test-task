import type { IShopSpecsType } from '@/modules/shop/types/IShopSpecsType.ts'

export interface IShopState {
  products: IProductType[],
  name: string,
  phone: string,
}

export interface IProductType {
  id: number,
  title: string,
  price: number,
  description: string,
  specs: IShopSpecsType[],
  images: string[]
}
