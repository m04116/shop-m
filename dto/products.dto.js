export class ProductsDto {
  constructor({ id, image, category, description, price }) {
    this.id = id;
    this.image = image;
    this.category = category;
    this.description = description;
    this.price = price;
  }
}