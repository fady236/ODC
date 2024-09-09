fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product');

      const productImg = document.createElement('img');
      productImg.src = product.thumbnail;
      productCard.appendChild(productImg);

      const productTitle = document.createElement('h2');
      productTitle.innerText = product.title;
      productCard.appendChild(productTitle);

      const productDescription = document.createElement('p');
      productDescription.innerText = product.description;
      productCard.appendChild(productDescription);

      const productPrice = document.createElement('span');
      productPrice.innerText = `$${product.price}`;
      productCard.appendChild(productPrice);

      productContainer.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error fetching products:', error));
