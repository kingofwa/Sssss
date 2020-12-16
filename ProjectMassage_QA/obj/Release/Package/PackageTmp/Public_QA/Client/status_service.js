//function Get_Data_Status_employee() {
//    $.ajax({
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        type: 'GET',
//        url: "/Home/GetData_Status_EmployeeStaff",
//        success: function (result) {
//            console.log(result)
//            var OBJ = JSON.parse(result);
//            var i = 0;
//            $(".staff").each(function () {
//                if ($(this).data('theme') != OBJ[i].E_Status) {
//                    $("#StatusColor_" + OBJ[i].Id).removeClass("bg-success");
//                    $("#status_" + OBJ[i].Id).val(1);
//                    $("#StatusColor_" + +OBJ[i].Id).attr("style", "background:#d9534f !important;");
//                    $("#pointer_" + OBJ[i].Id).css("pointer-events", "none");
//                    $("#StatusColor_" + OBJ[i].Id).addClass("bg-danger");
//                    $("#text_status_" + OBJ[i].Id).html("OFFLINE");

//                } else if ($(this).data('theme') == OBJ[i].E_Status) {
//                    $("#StatusColor_" + OBJ[i].Id).removeClass("bg-danger");
//                    $("#status_" + OBJ[i].Id).val(1);
//                    $("#StatusColor_" + +OBJ[i].Id).attr("style", "background:#5cb85c !important;");
//                    $("#pointer_" + OBJ[i].Id).css("pointer-events", "auto");
//                    $("#StatusColor_" + OBJ[i].Id).addClass("bg-success");
//                    $("#text_status_" + OBJ[i].Id).html("ONLINE");
//                }
//                i++;
//            })
//        }
//    })
//};

//setInterval(Get_Data_Status_employee, 1000);
//QA_start============ Thay đổi trạng thái của nhân viên ============\\
$("html").on("click", ".choose", function () {
    j = $(this).data("id");
    var employee = $("#status_" + j).val();
    var numberstar = parseInt($(this).data("target"));
    var star = "";
    for (var i = 0; i < numberstar; i++) {
        star += "<i class='fa fa-star'></i>";
    }
    if (employee == 1) {
        $("#StatusColor_" + j).attr("style", "background: #724c28 !important;");
        $("#StatusColor_" + j).html("<p id='text_status_"+ j +"'>" + "Đã chọn" + "</p>" + star);
        $("#status_" + j).val(2);
        toastr.success("Đã chọn!");
    } else {
        $("#StatusColor_" + j).attr("style", "background:#5cb85c !important;");
        $("#StatusColor_" + j).html("<p id='text_status_" + j + "'>" + "online" + "</p>" + star);
        $("#status_" + j).val(1);
        toastr.error("Đã hủy !");
    }
});



//QA_start============ Xác nhận chọn thể loại , dịch vụ , nhân viên ============\\
$("html").on("click", "#ActiveOrder", function () {
    debugger
    $("#erro").css("pointer-events", "none");
    $("#opacitybug").css("pointer-events", "auto");
    var service = $("#dichvu").val();
    var service1 = service.split("|");
    var category = $("#loaihinh").val();
    var category1 = category.split("|");
    var ID_Hiden = document.getElementsByClassName("ID_Hiden");
    var employeezz = document.getElementsByClassName("staff");
    var money = 0;
    var totalMoney = 0;
    var girl = [];
    girl.length = 0;
    var xauname = "";
    for (i = 0; i < employeezz.length; i++) {
        if (employeezz[i].value == 2) {
            debugger
            xauname += "<li><input type='hidden' data-money='" + $("#status_" + ID_Hiden[i].value).data('money')
                + "' value='" + $("#status_" + ID_Hiden[i].value).data('target')
                + "' id=' " + $("#status_" + ID_Hiden[i].value).data('target') + "' class='Select_Employee' />"
                + $("#status_" + ID_Hiden[i].value).data('target') + "-"
                + $("#status_" + ID_Hiden[i].value).data('id') +
                "</li>";
            totalMoney += parseFloat($("#status_" + ID_Hiden[i].value).data('money'));
        }
    };

    var bug = "";
    if (xauname == "") {
        bug = "<p>Chưa chọn phục vụ <b>!!!</b></p>";
    }
    if (parseInt(service) == 0) {
        totalMoney += parseFloat(category1[2]);
    }
    else {
        totalMoney += parseFloat(service1[2]) + parseFloat(category1[2]);
    }
    if (parseInt(category) == 0) {
        bug += "<p>Chưa chọn thể loại <b>!!!</b></p>"
    }
    if (bug == "") {
        debugger
        $("#myModal").modal("show");
        Hidebutton() + OpacityNone();
        $("#myModal").css("pointer-events", "none");
        $(".modal-content").css("pointer-events", "auto");
        $("#showstar").click(function () {
            Showbutton() + OpacityBlock();
            //$('#myModal').trigger("reset");
        });
        $("#show_Oder").html("");
        var oder = $("#show_Oder");
        var DataOder = "";
        if (parseInt(service) == 0) {
            DataOder =
            ' <td>#</td>' +
            ' <td>' + "" + '<input type="hidden"  id="service_oder" data-money="' + 0 + '" value="' + 0 + '" /></td>' +
            ' <td>' + category1[1] + '<input type="hidden" id="category_oder"  data-money="' + category1[2] + '"  value="' + category1[0] + '" /></td>' +
            ' <td><ul>' + xauname + '</ul><input type="hidden" id="IdEmployee_oder" value="' + xauname + '" /></td>';
            oder.append(DataOder);
        } else {
            DataOder =
            ' <td>#</td>' +
            ' <td>' + service1[1] + '<input type="hidden"  id="service_oder" data-money="' + service1[2] + '" value="' + service1[0] + '" /></td>' +
            ' <td>' + category1[1] + '<input type="hidden" id="category_oder"  data-money="' + category1[2] + '"  value="' + category1[0] + '" /></td>' +
            ' <td><ul>' + xauname + '</ul><input type="hidden" id="IdEmployee_oder" value="' + xauname + '" /></td>';
            oder.append(DataOder);
        }

        $("#show_Money").html("");
        var money = $("#show_Money");
        var DataMoney = '<b class="text-danger">' + number_format(totalMoney) + '<input type="hidden" id="totalMoney_oder"  value="' + totalMoney + '" /></b>' + 'đ';
        money.append(DataMoney)
    } else {
        //toastr.warning(bug)
        $("#bugggg").html(bug);
        $("#erro").modal("show");
        Hidebutton() + OpacityNone();
        $("#opacitybug").click(function () {
            Showbutton() + OpacityBlock();
        });
    }
});


// Xu ly phan chi tiet 
$(document).ready(function () {
    $(".left").click(function () {
        //$("#details").css("pointer-events", "none");
        $("span.closes").css("pointer-events", "auto");
        $("#back_home_client").css("pointer-events", "auto");
        Hidebutton() + OpacityNone();
    })
    $("#back_home_client").click(function () {
        Showbutton() + OpacityBlock();
        $("#details").modal("hide");
    })
});
$(document).ready(function () {
    $("#close").click(function () {
        Hidebutton() + OpacityNone();
    })
});
$("html").on("click", ".img-fluid", function () {
    Hidebutton() + OpacityNone();
});
function ViewDetails(id) {
    $("#details").modal("show");
    var data = JSON.stringify({
        Id: id,
    })
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Home/Get_Data_Details",
        data: data,
        success: function (result) {
            debugger
            var OBJ = JSON.parse(result);
            if (OBJ != null) {
                var Image_list_details = $("#Show_details_employee").html("");
                if (OBJ.E_ImageList != null) {
                    var mangimate = OBJ.E_ImageList.split("|");
                    for (var i = 0; i < mangimate.length; i++) {
                        var Data =
                        '<div class="col-md-3 col-xs-6" style="padding:2px;">' +
                        '<div class="img_details_employee">' +
                        '<div class="card-default">' +
                        '<img data-action="zoom" id="Zoom_image_employee_' + i + '" class="img-fluid" src="' + mangimate[i] + '" alt="" style="width:100%;height:250px;pointer-events: auto;">' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                        Image_list_details.append(Data);
                    }
                }
                var Show_introduce = $("#Show_introduce").html("");
                var data2 =
                 '' + OBJ.E_Details + '';
                Show_introduce.append(data2);
                var Show_choose = $("#choose_append").html("");
                if (OBJ.E_Status == 1) {
                    var data3 =
                        '<a data-id="' + OBJ.Id + '" data-target="' + OBJ.E_NumberStar_View1 + '" class="choose_details_employee_QA" id="choose_details">Chọn</a>';
                    Show_choose.append(data3);
                } else {
                    var data3 =
                       '<a class="choose_details_employee_QA" id="choose_details_return">Quay về</a>';
                    Show_choose.append(data3);
                }

            }
            else {
                alert("that bai");
            }
        },
        error: function () {
            alert("error")
        }
    });
}

//chon trong chi tiet
$("html").on("click", "#choose_details", function () {
    j = $(this).data("id");
    var employee = $("#status_" + j).val();
    var numberstar = parseInt($(this).data("target"));
    var star = "";
    for (var i = 0; i < numberstar; i++) {
        star += "<i class='fa fa-star'></i>";
    }
    if (employee == 1) {
        $("#StatusColor_" + j).attr("style", "background: #724c28 !important;");
        $("#StatusColor_" + j).html("<p>" + "Đã chọn" + "</p>" + star);
        $("#status_" + j).val(2);
    } else {
        $("#StatusColor_" + j).attr("style", "background:#5cb85c !important;");
        $("#StatusColor_" + j).html("<p>" + "online" + "</p>" + star);
        $("#status_" + j).val(1);
    }

    $("#details").modal("hide");
    Showbutton() + OpacityBlock();
})
$("html").on("click", "#choose_details_return", function () {
    $("#details").modal("hide");
    Showbutton() + OpacityBlock();
});

function XemChiTiet(id) {
    ViewDetails(id);
   
}


