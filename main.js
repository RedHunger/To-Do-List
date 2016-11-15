$( function() {
    $("#datepicker").datepicker();
    $('#basicExample').timepicker();
    $('#newdatepicker').datepicker();
  } );

  

function addNewElement() {
    var eleMMMMM = document.getElementById("myUL").children;
    var liElementsLength = document.getElementById("myUL").children.length;
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var elemText=document.createElement("span");
    var t = document.createTextNode(inputValue);
    var timePicker = $('#basicExample').val();
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
    elemText.className = 'point';
    elemText.setAttribute('data-id',liElementsLength) ;
    elemText.appendChild(t);
    li.appendChild(elemText);
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
    // debugger;
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

function removeElement(){
var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// function sortByDate() {
//     var mulpArr = [];
//     var newTasks = [];
//     var liElem = document.getElementById("myUL").children;
//     var liElem=getElementsByClassName("point").innerHTML
//     liElem = Array.prototype.slice.call(liElem[0]);
//     for (var i = 0; i < liElem.length; i++) {
//
//         var j;
//         for (var liNode = liElem[i], j = 0; j < 1; j++) {
//           newTasks.push(liNode.getElementsByClassName("point").innerHTML);
//
//             // liNode.sort(function(liNode, liNode) {
//             //     console.log(item1);
//             //     console.log(item2);
//             // });
//         }
//
//         console.log(newTasks);
//
//     }
// }

// function sortByName(){
//   var arrayspan=[];
//   var elem = document.getElementsByClassName('point');
//   for (var i=0; i < elem.length;i++){
//       arrayspan.push(elem[i].innerHTML);
//   }
//   var newArray = arrayspan.sort();
//
//   for(var i = 0; i < elem.length; i++){
//         elem[i].innerHTML = newArray[i];
//     }
//
//   console.log(elem);
//
// }

function sortByName() {
    // var mylist = $('#myUL');
    // var liElements = mylist.children('li').get();
    // var elem =mylist.children('li').get()
    var liElements = document.getElementById("myUL").children;
    liElements = Array.prototype.slice.call(liElements);
    var elem = document.getElementById("myUL").children;
    elem = Array.prototype.slice.call(elem);
    // debugger;
    liElements.sort(function(a, b) {
        var reg = /^[А-Я]|[A-Z]*/;
        var compA = [];
        var compB = [];
         compA[0] = a.textContent.split(' ').join("").toUpperCase().match(reg);
         compB[0] = b.textContent.split(' ').join("").toUpperCase().match(reg);
        return (compA[0] < compB[0]) ? -1 : (compA[0] > compB[0]) ? 1 : 0;


    });
    for (var j = 0; j < elem.length; j++) {
      elem.splice(j,1,liElements[j].innerHTML);
    }
  
    for(var i = 0; i < elem.length; i++){
        document.getElementById("myUL").children[i].innerHTML = elem[i];
    }
   removeElement();
}

function noSort(){
  var liElements = document.getElementById("myUL").children;
  liElements = Array.prototype.slice.call(liElements);
  var elem = document.getElementById("myUL").children;
  elem = Array.prototype.slice.call(elem);
  liElements.sort(function(a, b) {
    // var compA = [];
    // var compB = [];
    compA = a.childNodes[0].dataset.id;
    compB = b.childNodes[0].dataset.id;
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
  });

  console.log(liElements);
  for (var j = 0; j < elem.length; j++) {
      elem.splice(j,1,liElements[j].innerHTML);
    }
  
  for(var i = 0; i < elem.length; i++){
        document.getElementById("myUL").children[i].innerHTML = elem[i];
    }



}

 
function checkDate() {
    var checkBox = document.getElementById("check_date");
    var checkInput = document.getElementById("newdatepicker");
    if (checkBox.checked) {
        checkInput.removeAttribute('disabled');
    } else {
        checkInput.setAttribute('disabled','true');
    }
}


function filterByDate() {
  var liElements = document.getElementById("myUL").children;
  var elem = document.getElementById("myUL").children;
  var datePicker = $("#newdatepicker").datepicker({
      dateFormat: 'dd,MM,yyyy'
  }).val();
  var newList=[];
  liElements = Array.prototype.slice.call(liElements);
  elem = Array.prototype.slice.call(elem);

  for (var i = 0; i < elem.length; i++) {
      if (elem[i].children[1].innerHTML == datePicker) {
          newList.push(elem[i]);
      }
  }

  for (var j = 0; j < elem.length; j++) {
    if (newList[j] !== undefined){
    document.getElementById("myUL").children[j].innerHTML = newList[j].innerHTML;
    } else{
      document.getElementById("myUL").children[j].remove();
    }
  }
  
}
