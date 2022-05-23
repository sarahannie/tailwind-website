const search = () =>{
    const searchbox = document.getElementById('search-item').value.toUpperCase();
    const storeItems = document.getElementById("product-container")
    const product = document.querySelectorAll(".product")
    const pname = storeItems.getElementsByTagName('h3')


for(var i = 0; i < pname.length; i++){
    let match = product[i].getElementsByTagName("h3")[0];


    if(match){
        let textvalue = match.textcontent || match.innerHTML

        if(textvalue.toUpperCase().indexOf(searchbox)  > -1){
            product[i].style.display ="";
        }else{
            product[i].style.display ="none"; 
        }
    }
}

}
