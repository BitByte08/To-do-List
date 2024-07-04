const insert = document.getElementById("todo_btn");
const notcomplete = document.getElementsByClassName("not_complete");
const complete = document.getElementsByClassName("complete");

function insert_todo(){
    var inserttext = document.getElementById("todo").value;
    document.getElementById("todo").value='';
    if(inserttext!=''){
        DivNode = makedivnode(inserttext);
        notcomplete[0].appendChild(DivNode);
    }else{
        alert("입력하세요");
    }
}

function makedivnode(inserttext){
    var DivNode = document.createElement('div');
    DivNode.appendChild(maketextnode(inserttext));
    DivNode.appendChild(checkbox());
    DivNode.setAttribute('id','textdiv');
    DivNode.setAttribute('display','inline-block');
    return DivNode;
}

function maketextnode(inserttext){
    var PNode = document.createElement('span');
    var TextNode = document.createTextNode(inserttext);
    PNode.appendChild(TextNode);
    return PNode;
}

function checkbox(){
    InputNode=document.createElement('input');
    InputNode.setAttribute('type','checkbox');
    InputNode.setAttribute('class','ck');
    InputNode.addEventListener("click",p);
    return InputNode;
}

insert.addEventListener("click",insert_todo,false);


let ckbs = document.getElementsByClassName("ck");
function p(){
    for(var i=0;i<ckbs.length;i++){
        if(ckbs[i].checked){
            var temp = ckbs[i].parentNode;
            complete[0].appendChild(temp);
        }else{
            var temp = ckbs[i].parentNode;
            notcomplete[0].appendChild(temp);
        }
    }
}