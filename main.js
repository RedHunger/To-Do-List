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
    if (inputValue.length == 0 | datePicker.length == 0 | timePicker.length == 0 ) {
      console.log(inputValue + " "+ datePicker + " " + timePicker );
        alert("You must write action/date/time !");
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

function sortByDate() {
  var liElements = document.getElementById("myUL").children;
  liElements = Array.prototype.slice.call(liElements);
  var elem = document.getElementById("myUL").children;
  elem = Array.prototype.slice.call(elem);
  liElements.sort(function(a, b) {
    var reg = /\d{2}\/\d{2}\/\d{4}/;
    var compA = [];
    var compB = [];
    compA[0] = a.textContent.split(' ').join("").toUpperCase().match(reg)[0];
    compB[0] = b.textContent.split(' ').join("").toUpperCase().match(reg)[0];
    return (compA[0] < compB[0]) ? -1 : (compA[0] > compB[0]) ? 1 : 0;


  });
  for (var j = 0; j < elem.length; j++) {
    elem.splice(j, 1, liElements[j].innerHTML);
  }

  for (var i = 0; i < elem.length; i++) {
    document.getElementById("myUL").children[i].innerHTML = elem[i];
  }
  removeElement();
}


function sortByName() {
  var liElements = document.getElementById("myUL").children;
  liElements = Array.prototype.slice.call(liElements);
  var elem = document.getElementById("myUL").children;
  elem = Array.prototype.slice.call(elem);
  liElements.sort(function(a, b) {
    var reg = /^[А-Я]|[A-Z]*/;
    // var reg = /\d{2}\/\d{2}\/\d{4}/;
    var compA = [];
    var compB = [];
    compA[0] = a.textContent.split(' ').join("").toUpperCase().match(reg);
    compB[0] = b.textContent.split(' ').join("").toUpperCase().match(reg);
    return (compA[0] < compB[0]) ? -1 : (compA[0] > compB[0]) ? 1 : 0;


  });
  for (var j = 0; j < elem.length; j++) {
    elem.splice(j, 1, liElements[j].innerHTML);
  }

  for (var i = 0; i < elem.length; i++) {
    document.getElementById("myUL").children[i].innerHTML = elem[i];
  }
  removeElement();
}

function noSort() {
  var liElements = document.getElementById("myUL").children;
  liElements = Array.prototype.slice.call(liElements);
  var elem = document.getElementById("myUL").children;
  elem = Array.prototype.slice.call(elem);
  console.log(liElements);
  liElements.sort(function(a, b) {
    compA = a.childNodes[0].dataset.id;
    compB = b.childNodes[0].dataset.id;
    return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
  });


  for (var j = 0; j < elem.length; j++) {
    elem.splice(j, 1, liElements[j].innerHTML);
  }

  for (var i = 0; i < elem.length; i++) {
    document.getElementById("myUL").children[i].innerHTML = elem[i];
  }

  removeElement();

}

 
function checkDate() {
  var checkBox = document.getElementById("check_date");
  var checkInput = document.getElementById("newdatepicker");
  if (checkBox.checked) {
    checkInput.removeAttribute('disabled');
  } else {
    checkInput.setAttribute('disabled', 'true');
  }
}

function checkName() {
  var checkBox = document.getElementById("check_name");
  var checkInput = document.getElementById("inputname");
  if (checkBox.checked) {
    checkInput.removeAttribute('disabled');
  } else {
    checkInput.setAttribute('disabled', 'true');
  }
}



function filterByDate() {
  var liElements = document.getElementById("myUL").children;
  var elem = document.getElementById("myUL").children;
  var datePicker = $("#newdatepicker").datepicker({
    dateFormat: 'dd,MM,yyyy'
  }).val();
  var newList = [];
  liElements = Array.prototype.slice.call(liElements);
  elem = Array.prototype.slice.call(elem);

  for (var i = 0; i < elem.length; i++) {
    if (elem[i].children[1].innerHTML == datePicker) {
      newList.push(elem[i]);
    } else {
      elem[i].style.display = 'none';
      var editElem = elem[i];
      newList.push(editElem);

    }
  }

}

function filterByName() {

  var liElements = document.getElementById("myUL").children;
  var elem = document.getElementById("myUL").children;
  var inputName = document.getElementById('inputname').value;
  var newList = [];
  liElements = Array.prototype.slice.call(liElements);
  elem = Array.prototype.slice.call(elem);
  // debugger;
  for (var i = 0; i < liElements.length; i++) {
    var pointContent = liElements[i].textContent;
    if (pointContent.indexOf(inputName) !== -1) {
      newList.push(liElements[i]);
    } else {
      liElements[i].style.display = 'none';
      var editElem = liElements[i];
      newList.push(editElem);
    }
  }
}

function noFilters() {

  var liElements = document.getElementById("myUL").children;
  document.getElementById("check_name").checked = false;
  document.getElementById("check_date").checked = false;
  document.getElementById("inputname").setAttribute('disabled', true);
  document.getElementById("newdatepicker").setAttribute('disabled', true);
  for (var j = 0; j < liElements.length; j++) {
    liElements[j].style.display = 'block';
  }
}