import ProductManager from "./managers/ProductManager.js";

const productManager = new ProductManager();

const context = async()=>{
  const test = await productManager.getProducts();
  console.log(test);
  let testProduct = {
    title: "remera",
    description:"sport",
    price:4300,
    thumbnail:"sport.png",
    code:"120",
    stock: 30,
  };
  
  await productManager.addProducts(testProduct);
  
  const newProducts = await productManager.getProducts();
  console.log(newProducts);

  //await productManager.updateProduct("short", "sport", 4000, "sport.png", "222", 35);
}

context();

