function Showbutton() {  //show botton-bottom
    $("#ActiveOrder").removeClass("d-none");
    $("#ActiveOrder").addClass("btn-warning");
    $("#removestar").removeClass("d-none");
    $("#removestar").addClass("btn-danger");
  }
function Hidebutton() {  //hide botton-bottom
    $("#ActiveOrder").removeClass("btn-warning");
    $("#ActiveOrder").addClass("d-none");
    $("#removestar").removeClass("btn-danger");
    $("#removestar").addClass("d-none");
  }
function OpacityNone(){
    $(".QA_client").css("opacity", "0.1");
  }
function OpacityBlock(){
    $(".QA_client").css("opacity", "1");
}

//
function number_format(number, decimals, dec_point, thousands_sep) {
    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "," : dec_point;
    var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
}

