let location_=(document.getElementsByTagName("body"))

let create_element=document.createElement("div")
create_element.classList.add("css")
create_element.id="sub_a"
location_[0].appendChild(create_element)

let count=document.createElement("h1")
count.id="c"
count.textContent="count"


let parent_id=document.getElementById("sub_a")
let sub_container=document.createElement("div")
sub_container.id="sub_b"
sub_container.classList.add("sub")
parent_id.appendChild(sub_container)



let container_3=document.createElement("div")
container_3.id="sub_c"
container_3.classList.add("mini")
document.getElementById("sub_b").appendChild(container_3)

let container_4=document.createElement("div")
container_4.id="sub_d"
container_4.classList.add("mini")
document.getElementById("sub_b").appendChild(container_4)

let h1=document.createElement("h1")
h1.textContent="increment"
document.getElementById("sub_c").appendChild(h1)

let btn1=document.createElement("button")
btn1.id="btn1"
btn1.textContent="start_incre"
btn1.classList.add("btn_styles")
document.getElementById("sub_c").appendChild(btn1)

let h2=document.createElement("h1")
h2.textContent="decrement"
document.getElementById("sub_d").appendChild(h2)

let btn2=document.createElement("button")
btn2.textContent="start_decre"
btn2.id="btn2"
btn2.classList.add("btn_styles")
btn2.style.backgroundColor="red"
document.getElementById("sub_d").appendChild(btn2)

let a=document.getElementById("btn1")
let b=document.getElementById("btn2")
let count_value=0
a.onclick=function(){
    count_value+=1
  
    a.textContent=count_value

}
let z=0
b.onclick=function(){
    count_value=count_value-1
  
    b.textContent=count_value

}



