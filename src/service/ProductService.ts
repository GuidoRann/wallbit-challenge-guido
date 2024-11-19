export default class ProductService {
  
  static async getProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${ id }`);
    const data = await response.json();
    return data;
  }

}