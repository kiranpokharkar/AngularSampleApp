export interface Dimensions {
    depth: number;
    height: number;
    width: number;
}
  
export interface Product {
    id: number;
    title: string;
    dimensions: Dimensions;
}