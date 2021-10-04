function itemsForm(formArg){

    let items = [];

    for(item of formArg){

        items.push(item);

    }

    return items;

}

function validate(){

    let form = itemsForm(document.forms.item(0));

    let itemsVal = form.filter((item) => {

        if(item.type != 'submit'){
    
            return item;
    
        }
    
    })

    itemsVal = itemsVal.filter((item)=>{

        if(item.value == ""){

            return item;

        }

    })

    if(itemsVal.length == 0){

        return true

    }
    else{

        for(item of itemsVal){

            item.className = "borda"

        }

        return false

    }

    
}


// remover borda

function removeBorder(input){

    if(input.value != "" && input.className == "borda"){
        console.log(input.className)
        input.classList.remove("borda");

    }

}
