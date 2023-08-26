
const arr = [  '', 'image 1', 'image 2', '3image 1', 'image 4', 'image 5', 'image 16', 'image 6', '7', 'image 31']
const price = [null, '$200', '$300', '$350', '$70', '$1000', '$908', '$323', '$1223','$400', '$500']
 const loading = ()=>{
    let slider = document.querySelector('.slider')
    let counter = 9;
    
    for(let i = 1; i < counter; i++){
    slider.innerHTML +=  `
        <div class="card">

            <div class="card-content">
                <img src="images/${i}.jpg" alt="" class="card-img">
                <h1 class="card-title">${arr[i]}</h1>
                <div class="card-body">
                    <div class="card-star">
                        <span class="rating-value">4.5</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <p class="card-price">${price[i]}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-success">Buy Now</button>
                    <button class="btn btn-border add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>
        `
      
    }
}

loading()