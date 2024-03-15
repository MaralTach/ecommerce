 

 export const getProducts = async () => {
    const res = await fetch("https://anthonyfs.pythonanywhere.com/api/products/");
    const data = await res.json();
    console.log(data);
    products = data;
    category();
    displayProducts(products);
  };
  getProducts();
  


