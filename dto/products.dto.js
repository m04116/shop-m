export class ProductsDto {
  constructor({ id, image, category, title, description, price }) {
    this.id = id;
    this.image = image;
    this.category = category;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}