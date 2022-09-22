function GetAllWeather() {
    fetch('https://fakestoreapi.com/products')
    .then(responsive => responsive.json())
    .then(info =>{
         
         let item = '';

      info.forEach(product => {
        
           item += `
         
           <div class="col-lg-3">
           <div class="card mt-4 position-relative">
           <div class="img">   
           <img src=${product.image} class="card-img-top" alt="">
           </div>    
           <div class="card-body">
                 <h5>${product.title.length > 20 ? product.title.slice(0,24) + "..." : product.title}</h5>
                 <p class="card-text">${product.description.length > 20 ? product.description.slice(0,20) + " <span>. . .</span>" : product.description}</p>
                 <p class="price fs-3 ${product.price>100 ? 'red' : 'green'}">${product.price}$</p>
                 <a href="#" class="btn btn-dark">Go somewhere</a>
               </div>
               <div class="hover position-absolute">
               <i class="fa-solid fa-magnifying-glass"></i>
               <i class="fa-regular fa-heart"></i>
               <i class="fa-solid fa-arrows-rotate"></i>
               <i class="fa-solid fa-bag-shopping"></i>
              </div>
             </div>
       </div>
           
           `
      })

         document.getElementById('box').innerHTML=item;

    })
            

}

GetAllWeather();