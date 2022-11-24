

let body=document.getElementsByTagName("body")[0];
let div=document.createElement("div");
body.appendChild(div);

let ul=document.createElement("ul");
ul.type="none"
div.appendChild(ul)
function create_li(data){
    let sub_tag=document.createElement("li")
    sub_tag.classList.add("li_styles")
    sub_tag.appendChild(data)
    ul.appendChild(sub_tag)

}


let heading=document.createElement("h1");
heading.textContent="create todo";
create_li(heading)


let take_input=document.createElement("input");
take_input.type="text";
create_li(take_input);


let button=document.createElement("button");
button.textContent="Add"
create_li(button)

function cretaetodo(arg){
       
       let mini_container=document.createElement("div")
       mini_container.classList.add("c1")
       create_li(mini_container)
       
       let box_id="check_box"+arg.id 
       let label_id="label"+arg.id 
       let delete_id="delete"+arg.id
       
       
       let checkbox=document.createElement("input")
       checkbox.type="checkbox"
       checkbox.id=box_id
       checkbox.classList.add("checkbox")
       mini_container.appendChild(checkbox)
       
       
       
       let label_container=document.createElement("div")
       label_container.classList.add("label-container") 
       
       let label=document.createElement("label")
       label.classList.add("label") 
       label.id=label_id
       label.setAttribute("for",box_id)
       label.textContent=arg.text
       label_container.appendChild(label)
       
       let delete_container=document.createElement("div")
       delete_container.classList.add("delete-container") 
       
       let delete_=document.createElement("h1")
       delete_.textContent="-"
       delete_.classList.add("delete") 
       delete_container.appendChild(delete_)
       label_container.appendChild(delete_container)
       mini_container.appendChild(label_container)
}





let save_button=document.createElement("button");
save_button.textContent="save";
body.appendChild(save_button)


let count_id=0
button.onclick=function(){
    count_id+=1 
    cretaetodo({text:take_input.value,id:count_id})
}

count=0
let actual_data=[]
save_button.onclick=function take_value(){
    count=count+1
    actual_data.push({text:take_input.value,id:count});
    localStorage.setItem("key",JSON.stringify(actual_data));
    
} 

function parse_data(){
    let get_data=localStorage.getItem("key")
    let parse_data=JSON.parse(get_data)
    return(parse_data)
}
let acess_data=parse_data()

for(let i of acess_data){
     cretaetodo(i)
}
