const url = 'http://127.0.0.1:5500/MP2/js/api.js';

fetch(url)
.then( response => response.json()) //object
.then( result => {
    //console.log(result) //array

    let a = [];
    a = result;

    let div_area = document.getElementById("products");

    let show = "";

    a.forEach(
        function(item){

            show += 
            `<div class="card d-inline-flex" style="width: 18rem;">
                <img src="${item.img}" id = "img${item.id}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-text"  id="p${item.id}" hidden>${item.id}</p>
                <h5 class="card-title" id="prod${item.id}"> ${item.product}</h5>
                <p class="card-text"  id="pri${item.id}">${item.price}</p>
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#m${item.id}>Buy</a>

                <!-- Modal -->
                <div class="modal fade" id="m${item.id}" tabindex="-1" aria-labelledby="m${item.id}Label" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="m${item.id}Label">Modal title</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${item.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <p class="card-text"  id="p${item.id}" hidden>${item.id}</p>
                        <h5 class="card-title" id="prod${item.id}"> ${item.product}</h5>
                        <p class="card-text"  id="pri${item.id}">${item.price}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" id=${item.id} onclick="addOrder(${item.id})">Add to Cart</button>
                    </div>
                    </div>
                </div>
                </div>

                </div>
            </div>
          `;
            
        });
        div_area.innerHTML = show ;
})

function addOrder(id){
    let logs = sessionStorage.getItem("login");
    if((logs == null) || (logs == "")) { 
        alert("Please log in first!");
        location.replace("login.html");
    }else{
        let array = localStorage.getItem("order");
        //console.log(array);
        
        if (array == null){
            let orderlist = [];
            let new_id = document.getElementById("p"+id).innerText;
            let new_prod = document.getElementById("prod"+id).innerText;
            let new_price = document.getElementById("pri"+id).innerText;

            let prod_img = document.getElementById("img" + id).src;
            console.log(prod_img);
            
            orderlist.push({id: new_id, product: new_prod, price: new_price, img: prod_img }); 
            localStorage.setItem("order",JSON.stringify(orderlist));
            cartlength();

        }else{
            let orderlist = JSON.parse( localStorage.getItem("order"));
            let new_id = document.getElementById("p"+id).innerText;
            let new_prod = document.getElementById("prod"+id).innerText;
            let new_price = document.getElementById("pri"+id).innerText;

            let prod_img = document.getElementById("img" + id).src;
            console.log(prod_img);
            
            orderlist.push({id: new_id, product: new_prod, price: new_price , img: prod_img}); 
            localStorage.setItem("order",JSON.stringify(orderlist));
            cartlength();
        }
    }

}

function cartlength(){

    let cart = JSON.parse(localStorage.getItem("order")); //array
    if (cart == null){
        let cart_l = document.getElementById("cartlength");
        cart_l.innerText = "";
    }else{
        let cart_l = document.getElementById("cartlength");
        cart_l.innerText = cart.length;
    }
   
}
cartlength();
