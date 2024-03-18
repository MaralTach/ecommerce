const category = document.getElementById('category')


const mainNav = [
    "home",
    "electronics",
    "success",
    "sports",
    "clothing",
    "jewelry",
  ];

  let products =[];
  let baskets =[];




  /* ********************************** */
  /*           displayProduct           */
  /* ********************************** */

  function displayProducts(arr) {
  productDivs.innerHTML = "";
  arr.forEach((item) => {
    const { id, title, description, price, image } = item;
    const productDiv = document.createElement("div");
    productDiv.classList.add("col");
    productDiv.setAttribute("id", id);
    productDiv.innerHTML = `
        <div class="card">
            <img src="${image}" class="p-2" height="250px" alt="...">
            <div class="card-body">
      <h5 class="card-title">${title}</h5>
              <p class="card-text line-clamp-2">${description}</p>
            </div>
            <div class="card-footer w-100 fw-bold d-flex justify-content-between gap-3">
            <span>Price:</span><span>${price} $</span>
                
            </div>
            <div class="card-footer w-100 d-flex justify-content-center gap-3">
                <button class="btn btn-danger">
                Sepete Ekle
                </button>
                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Details
                </button>
            </div>
          </div>
        `;
    productDiv.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-danger")) {
        addToCart(item);
      }else if (e.target.classList.contains("btn-primary")){
        showModal(item)
      }
    });
    productDivs.appendChild(productDiv);
  });
}