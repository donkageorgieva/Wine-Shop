export class Products {
  async getProducts() {
    try {
      let result = await fetch("src/products.json");
      let data = await result.json();
      let products1 = data.items1;
      products1 = products1.map((item) => {
        const { id } = item.sys;
        const { title, price } = item.fields;
        const image = item.fields.image.fields.file.url;
        const { row } = item.fields;
        return { title, id, price, image, row };
      });
      return products1;
    } catch (error) {
      console.log(error);
    }
  }
}
