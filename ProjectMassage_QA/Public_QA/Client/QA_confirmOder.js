function ConfirmOder() {
    debugger
    var note = $("#note_oder").val();
    if (note = "" || note.length < 2) {
        $("#thongtinkhongduocdetrong").html("Thông tin không được để trống và ngắn hơn 2 ký tự ");
    } else {
    var note = $("#note_oder").val();
    var service = $("#service_oder").val();
    var categori = $("#category_oder").val();
    var code = "";
    if ($("#phantramgiam").data("sale") > 0) {
        var code_sale_id = $("#phantramgiam").data("sale");
        var phantramgiam = $("#phantramgiam").val();
    } else if ($("#phantramgiam").data("sale") == null) {
        var code_sale_id = 0;
        var phantramgiam = 0;
    }
   
    var Select_Employee = document.getElementsByClassName("Select_Employee");
    var aray_select_order = [];
    aray_select_order.length = 0;
    aray_select_order.push(
        {
            ID: service,
            money: $("#service_oder").data("money"),
            Type: "service"
        })
    aray_select_order.push(
       {
           ID: categori,
           money: $("#category_oder").data("money"),
           Type: "categori"
        })
    for (var i = 0; i < Select_Employee.length; i++) {
        debugger
        aray_select_order.push(
             {
                 ID: Select_Employee[i].value,
                 money: $("#status_" + Select_Employee[i].value).data("money"),
                 Type: "Employee"
             })
        code += $("#status_" + Select_Employee[i].value).data("code");
    }
    var data = JSON.stringify({
        Oder: aray_select_order,
        Note: note,
        CODE: code,
        Id_Sale: code_sale_id,
        phantramgiam:phantramgiam
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Oder/Save_Oder",
        data: data,
        success: function (result) {
            debugger
            if (result.success == true) {
                $("#myModal").modal("hide");
                $("#successOder").modal("show");
                Hidebutton() + OpacityNone();
                $("#CodeOder").html(result.O_number);
                $(".modal-content").css("pointer-events", "auto");
                $("#successOder").css("pointer-events", "none");
                $("#opacitysuccess").click(function () {
                    Showbutton() + OpacityBlock();
                });
            } else {
                alert("Loser")
            }
        },
        error: function () {
            alert("error")
        }
    });
  } //end else
};

$("html").on("click", "#get_sale_client", function () {
    var sale = $("#magiam").val();
    var data = JSON.stringify({
        sale: sale
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Oder/GET_Sale",
        data: data,
        success: function (result) {
            if (result) {
                debugger
                var OBJ = JSON.parse(result);
                if (OBJ.length > 0) {
                    $("#show_giam").html("");
                    var money = $("#show_giam");
                    var DataMoneyy = '<b class="text-danger">' + OBJ[0].Sale_code + '<input type="hidden" id="phantramgiam" data-sale="' + OBJ[0].Id + '"  value="' + OBJ[0].Sale_code + '" /></b>' + '%';
                    money.append(DataMoneyy);
                    var total_money_firt_sale = $("#totalMoney_oder").val();
                    var total_money_lart_sale = total_money_firt_sale * (100 - OBJ[0].Sale_code) / 100;
                    $("#show_Money").html('<b class="text-danger">' + number_format(total_money_lart_sale) + '</b>');
                    toastr.success("Chúc mừng !");
                } else {
                    //$("#show_giam").html("");
                    //var money = $("#show_giam");
                    //var DataMoneyy = '<small><b class="text-danger">' + "Mã giảm không đúng !" + '</b></small>';
                    //money.append(DataMoneyy);
                    toastr.warning("Mã giảm không đúng !");
                }
            } else {
                alert("Loser")
            }
        },
        error: function () {
            alert("error")
        }
    });

});



//$("#showsuccess").click(function () {
//    debugger
//    $("#successOder").css("pointer-events", "none");
//});
//$("#opacitysuccess").click(function () {
//    Showbutton() + OpacityBlock();
//});