student_array=[];
function submit(){
    display_array=[];
    for(var i=1;i<=4;i++){
        var student_name=document.getElementById("name_of_the_student_"+i).value;
        student_array.push(student_name);
    }
    var length=student_array.length;
    for(var j=0;j<length;j++){
        display_array.push("<h4> NAME-"+student_array[j]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;
    var remove_commas=display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    student_array.sort();
    display_sort_array=[];
    var length=student_array.length;
    for(var j=0;j<length;j++){
        display_sort_array.push("<h4> NAME-"+student_array[j]+"</h4>");
    }
    var remove_commas=display_sort_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}

function new_update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+student_array+"</h1>";
}
