
//testing to display 5 on html page
//document.getElementById("count-sub").innerText = 5


let countSub = document.getElementById("count-sub")

console.log("count-sub")

let count = 0 

// increase count everytime button is clicked
function increase() {
    count = count + 1
    countSub.innerText = count
   //console.log("The button was clicked")
    //console.log(count)

}

// creating save function to log and save count
function save(){

    console.log(count)
}
