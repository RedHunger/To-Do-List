$( function() {
    $("#datepicker").datepicker();
  } );
$('#basicExample').timepicker();


function addNewElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    var timePicker=$('#basicExample').val();
    var datePicker = $("#datepicker").datepicker({
        dateFormat: 'dd,MM,yyyy'
    }).val();
    var datespan = document.createElement("SPAN");
    var datetxt = document.createTextNode(datePicker);
    var date = document.getElementsByClassName("date");

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("close");
    var close = document.getElementsByClassName("close");

    var timespan = document.createElement("SPAN");
    var timetxt = document.createTextNode(timePicker);
    var time = document.getElementsByClassName("time");

    span.className = "close";
    li.appendChild(t);
    if (inputValue | datePicker | timePicker  === '' ) {
      console.log(inputValue + " "+ datePicker + " " + timePicker );
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    document.getElementById("datepicker").value = "";
    document.getElementById("basicExample").value = "";

    datespan.className = "date";
    datespan.appendChild(datetxt);
    li.appendChild(datespan);

    timespan.className = "time";
    timespan.appendChild(timetxt);
    li.appendChild(timespan);

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

function sortByDate (){
  var mulpArr=[];
  var newTasks=[];
  var liElem=document.getElementById("myUL").children;
  for (var i = 0; i < liElem.length; i++){
    var j ;
    for (var liNode = liElem[i].childNodes, j=0 ; j <liNode.length; j++){
      if (j % 4 == 0)
      newTasks.push(liNode[j].innerHTML);
    }
  }
var mulpArr=newTasks.sort();
console.log(mulpArr);

}

function ascendingSort() {
     var newTasks = new Array();
     for (var i =0; i < document.forms[0].tasks.length; ++i) {
           newTasks[i] = document.forms[0].tasks.options[i].value;
     }
     newTasks.sort();
     for (var j =0; j < document.forms[0].tasks.length; ++j) {
           document.forms[0].tasks.options[j].value = newTasks[j];
           document.forms[0].tasks.options[j].text = newTasks[j];
     }
}
