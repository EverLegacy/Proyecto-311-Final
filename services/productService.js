const faker = require("faker");


class productService{
    constructor(){
        this.products = [];
        this.generate();
    }

    generate(){
      const limit=100;
      for(let i=0;i<limit;i++){
        this.products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.imageUrl()
        });
      }
    }


    async create(data){
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.products.push(newProduct);
      return newProduct;
    }

    async getAll(){
      return this.products;
    }

    async getById(id){
      return this.products.find(p => p.id == id);



    }

    async update(id, changes){
      const index = this.products.findIndex(p => p.id == id);
      if(index === -1){
        throw new Error('Product not found');
      }
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index];
    }

    async delete(){
      const index = this.products.findIndex(p => p.id == id);
      if(index === -1){
        throw new Error('Product not found');
      }
      this.products.splice(index, 1);
      return { id };
    }

}

module.exports = productService;
