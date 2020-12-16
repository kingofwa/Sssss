
function ShowDetails(id) {
    debugger
    //var id = $(this).data('id');
    if ($("#hide_" + id).val() == 0) {
        $("#show_details_" + id).removeClass(".fa fa-plus-circle");
        $("#show_details_" + id).addClass(".fa fa-minus-circle");
        $("#show_details_" + id).css("color", "red");
        $("#HideDetails_" + id).removeClass("d-none")
        $("#HideDetails_" + id).addClass("d-inline-block")
        $("#hide_" + id).val(1);
    } else {


        $("#show_details_" + id).removeClass(".fa fa-minus-circle");
        $("#show_details_" + id).addClass(".fa fa-plus-circle");
        $("#HideDetails_" + id).removeClass("d-inline-block")
        $("#HideDetails_" + id).addClass("d-none")
        $("#show_details_" + id).css("color", "green");
        $("#hide_" + id).val(0);
    }
}
//
$("html").on("click", ".employee.text-xs-center", function () {
    var id = $(this).data('id');// lay gia tri trong data-id
    debugger
    Doimau(id, 0)
});
function Doimau(id, idtang) {
    debugger
    if ($("#statusemployee_" + id).val() == 0) {
        $("#addemployee_" + id).css("background", "#df8931");
        $("#addemployee_" + id).css("color", "white");
        //$("#addemployee_" + id).html("chon");
        $("#statusemployee_" + id).val(1);
        $("#QA_employee_Oder_Admin_ID_tang_" + id).val(idtang);
    } else {
        $("#addemployee_" + id).css("background", "green");//xanh
        $("#addemployee_" + id).css("color", "white");
        //$("#addemployee_" + id).html("");
        $("#statusemployee_" + id).val(0);
        $("#QA_employee_Oder_Admin_ID_tang_" + id).val(idtang);
    }
};
function Show_Modal_OderDetailsShow() {
    debugger
    $("#modal-xl").modal("show");
    OderDetailsShow();
    Checkroom();
    GET_Data_Admin_T_C();//lay thoi gian && chu y
    var time_now = new Date();//gan time hien tai khi show check
    var time = moment(time_now).format("h:mm A");
    $("#FirtHourCheckin").val(time);
};
function CloseRessetroom() {
    $("#modal-xl").modal("hide");
};
//Gan gia tri tu bang oder len modal 
function OderDetailsShow() {
    debugger
    $(".QA_employee_Oder_Admin").val(0);
    $(".employee").css("background", "green");
    var QA_CheckOder = document.getElementsByClassName("QA_CheckOder");
    var list_oder = "";
    for (var i = 0; i < QA_CheckOder.length; i++) {
        if (QA_CheckOder[i].checked == true) {
            list_oder = QA_CheckOder[i].value;
            $("#Order_Id_hiden").val(QA_CheckOder[i].value);
            $("#ServiceCheckin").val($("#IdCate_" + list_oder).data('id'));//lay id cua category tu bang oder sang modal xac nhan
            $("#CategoryCheckin").val($("#IdService_" + list_oder).data('id'));//lay id cua service tu bang oder sang modal xac nhan
            $("#ServiceCheckin_Tang_Id_hiden").val($("#IdService_" + list_oder).data('name'));
            $("#Category_Id_Tang_hiden").val($("#IdCate_" + list_oder).data('name'));

            var Employeecolor = $("#hide_" + list_oder).data('id');

            var id_tang = $("#hide_" + list_oder).data('name');

            var Arrayid_tang = id_tang.toString().split("|");

            var ArrayEmployee = Employeecolor.toString().split("|");

            for (var j = 0; j < ArrayEmployee.length; j++) {
                Doimau(ArrayEmployee[j], Arrayid_tang[j]);
            }
        }
    }
};
function Checkroom() {
    debugger
    $("#show_rooms").html("");
    var OderroomAdmin = document.getElementsByClassName("OderroomAdmin");
    var OderroomAdmin2 = document.getElementsByClassName("OderroomAdmin2");
    var Listroom = "";
    var List_tenphong = "";
    for (var i = 0; i < OderroomAdmin2.length; i++) {
        if (OderroomAdmin2[i].value == -1) {
            if (Listroom == "") {
                Listroom = $("#getroom_" + OderroomAdmin[i].value).data('id');
                List_tenphong = $("#getroom_" + OderroomAdmin[i].value).data('name');
            }
            else {
                Listroom = Listroom + "|" + $("#getroom_" + OderroomAdmin[i].value).data('id');
                List_tenphong = List_tenphong + "," + $("#getroom_" + OderroomAdmin[i].value).data('name');
            }
            var room = $("#show_rooms");
            var Dataroom =
                ' <div class="col-md-2 text-white-50">' +
                ' <p class="bg-warning text-center" style="font-size: 15px;">' + $("#getroom_" + OderroomAdmin[i].value).data('name') + '</p>' +
                '</div>';
         room.append(Dataroom);
        }
    }
    var room = $("#show_rooms");
    var Dataroom = '<input type="hidden" id="Select_rom_" value="' + Listroom + '"/>' +
        '<input type="hidden" id="tenphong" value="' + List_tenphong + '"/>';
 room.append(Dataroom);

};
function GET_Data_Admin_T_C() {
    debugger
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'GET',
        url: "/Admin/AdminHome/Get_data_admin_register",
        success: function (result) {
            if (result) {
                var time_now = new Date();
                var time = parseInt(result.time);
                var return_time = time_now.setHours(time_now.getHours() + time);
                var time_checkout = moment(return_time).format("h:mm A");
                var day_checkout = moment(time_now).format("L");
                $("#LastDayCheckin").val(day_checkout);
                $("#LastHourCheckin").val(time_checkout);
                //chu y
                if (result.chu_y) {
                    $("#chu_y_khi_check").html("<i class='fas fa-exclamation-triangle mr-1'></i>" + result.chu_y);
                } else {
                    $("#chu_y_khi_check").html("");
                }
            } else {
                toastr.warning(" CheckIn thất bại !");
            }
        },
        error: function () {
            alert("error")
        }
    })
};

$(document).ready(function () {
    Get_Data_Oder_Client();
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'GET',
        url: "/Admin/AdminHome/Get_data_admin_register_thongbao",
        success: function (result) {
            if (result) {
                if (result.thongbao) {
                    $("#thongbao_bottom_footer").html("<i class='fas fa-bullhorn mr-2'></i>" + result.thongbao);
                } else {
                    $("#thongbao_bottom_footer").html("");
                }
                $(".tencongty").html("<i class='fab fa-gg mr-1'></i>" + result.tencongty);
                $(".viethoaCT").html(result.tenCTchuhoa);
                $(".diachi").html("<i class='fas fa-map-marker-alt mr-1'></i>" + result.diachi);
                $(".sdt").html("<i class='fas fa-phone-alt mr-1'></i>" + result.sdt);

                $(".logo_res").attr("src", result.logo_res);
                $(".camon").html(result.camon);
                $("#count_sansang").html(result.pt);
                $("#count_cokhach").html(result.pck);
                $("#count_dangban").html(result.pb);
               
              
            } else {
                toastr.warning(" thất bại !");
            }
        },
        error: function () {
            alert("error")
        }
    });
});

//----------------------------------------phần chuối---------------------------------------------\\
function ConfirmCheckIn() {
    debugger
    var oder_id = $("#Order_Id_hiden").val();
    var firtdaycheck = $("#FirtDayCheckin").val();
    var firthourcheck = $("#FirtHourCheckin").val();
    var lastdaycheck = $("#LastDayCheckin").val();
    var lasthourcheck = $("#LastHourCheckin").val();
    var categorycheck = $("#CategoryCheckin").val();
    var servicecheck = $("#ServiceCheckin").val();
    var notecheck = $("#NoteCheckin").val();
    var code = "";
    var ss = "";
    var employeeStaffCheck = document.getElementsByClassName("QA_employee_Oder_Admin1");
    var oder = [];
    oder.length = 0;
    oder.push({
        Id: oder_id,
        FirtDayCheckin: firtdaycheck,
        LastDayCheckin: lastdaycheck,
        FirtHourCheckin: firthourcheck,
        LastHourCheckin: lasthourcheck,
        CategoryCheckin: categorycheck,
    });
    var ID_tang = document.getElementsByClassName('ID_tang');
    var oderdetail = [];
    oderdetail.length = 0;
    var employeestaff = "";
    if (categorycheck > 0) {
        oderdetail.push({

            Id_tang: ID_tang[0].value,
            EmployeeId: categorycheck,
            TypeOder: "categori"
        })
    }
    if (servicecheck > 0) {

        oderdetail.push({
            Id_tang: ID_tang[1].value,
            EmployeeId: servicecheck,
            TypeOder: "service"
        })
    }
    else {
        ss = "Bạn chưa chọn dịch vụ!";
    }
    if (employeeStaffCheck.length > 0) {
        for (var i = 0; i < employeeStaffCheck.length; i++) {
            var value = employeeStaffCheck[i].value;
            if (parseInt($("#statusemployee_" + value).val()) == 1) {
                oderdetail.push({
                    Id_tang: ID_tang[(i + 2)].value,
                    EmployeeId: $("#statusemployee_" + employeeStaffCheck[i].value).data('id'),
                    Money: $("#statusemployee_" + employeeStaffCheck[i].value).data('money'),
                    TypeOder: "Employee"
                })
                code += $("#statusemployee_" + employeeStaffCheck[i].value).data("code");
            }
        }
    }
    if (code==""){
       ss += "Bạn chưa chọn phục vụ!";
    }
    debugger
    var roomtong = $("#Select_rom_").val();
    if (roomtong == null ||roomtong=="") {
        ss += "Bạn chưa chọn phòng.";
    }
    if (ss=== "") {//////////////////////////////////////////////
        var data = JSON.stringify({
            oderdetail: oderdetail,
            oder: oder,
            code: code,
         room:roomtong
        });
        var id_room = $("#Select_rom_").val();
        var maoder = $("#maoder").val();
        var id_oder = $("#Order_Id_hiden").val();
        if (oder_id == 0) {
            maoder = code;
        }
        var tenphong = $("#tenphong").val();
        var list_id = "";
        for (var z = 0; z < employeeStaffCheck.length; z++) {
            var value = employeeStaffCheck[z].value;
            if (parseInt($("#statusemployee_" + value).val()) == 1) {
                list_id = list_id + "|" + $("#statusemployee_" + employeeStaffCheck[z].value).data('id');
            }
        };
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            type: 'POST',
            url: "/Admin/AdminHome/Save_Admin_Order_And_Detail",
            data: data,
            success: function (result) {
                if (result.success == true) {
                    debugger
                    id_oder = result.Id;
                    $("#xoasaukhicheckinxong_" + id_oder).remove();
                    $("#xoasaukhicheckinxong1_" + id_oder).remove();
                    var array_status = id_room.split('|');
                    var user = $("#user_hide").data('color');
                    var array = user.split("|");
                    for (var i = 0; i < array_status.length; i++) {
                        $("#card-QA_Status_" + array_status[i]).css({
                            'background-color': array[4],
                        });
                        $("#room_delete_" + array_status[i]).removeClass("NowEmpty");
                        $("#room_delete_" + array_status[i]).addClass("QA_disabled");
                        $("#room_delete_" + array_status[i]).addClass("HaveGuests");
                        $("#room_delete_" + array_status[i]).css("pointer-events", "none");
                        $("#card-QA_Status_" + array_status[i]).removeClass("bg-success");
                        $("#choose_" + array_status[i]).css("color", "black");
                        $("#choose_icon_" + array_status[i]).html("<i class='fas fa-people-arrows'></i>");
                        $("#choose_html_" + array_status[i]).html("CÓ KHÁCH");
                        $("#countdown_" + array_status[i]).addClass("countdown");
                        $("#doimau_" + array_status[i]).val(1);
                        $("#getroom_" + array_status[i]).val(0);
                    };
                    //mã oder ,id cehckin , các phòng ,tổng tiền(chưa giảm  nếu có)
                    debugger
                    var bill = $("#apendbill");
                    var Data_biill =
                        '<tr id="hide_bill_' + id_oder + '">' +
                        '<td class="hideorshow">' +
                        '<label class="containerr">' +
                        '<input type="radio" class="QA_CheckOder" name="checkedhoadon" value="">' +
                        '<span class="checkmark le" data-id=' + id_oder + '></span>' +
                        '</label>' +
                        '</td>' +
                        '<td>' + maoder + '</td>' +
                        '<td><b>' + tenphong + '</b></td>' +
                        '<td><b style="color:red;">' + themdauphay(result.tt) + '</b></td>' +
                        '</tr>';
                    bill.append(Data_biill);
                    debugger
                    $("#count_sansang").html(result.pt);
                    $("#count_cokhach").html(result.pck);
                    $("#count_dangban").html(result.pb);
                    var array_id = list_id.split('|');
                    for (var i = 0; i < array_id.length; i++) {
                        $("#travetrangthainhanvien_" + array_id[i]).addClass("QA_disabled");
                        $("#addemployee_" + array_id[i]).removeClass("sussecc");
                        $("#addemployee_" + array_id[i]).addClass("warning");
                        $("#statusemployee_" + array_id[i]).val(0);
                    }
                    $("#modal-xl").modal("hide");
                    Get_Data_Oder_Client();
                    toastr.success("CheckIn thành công !");
                } else {
                    toastr.warning(" CheckIn thất bại !");
                }
            },
            error: function () {
                toastr.error("Lỗi hệ thống !");
            }
        })
    } else {
        toastr.warning(ss);
        return;
    }
};
//////////////////Tính tiền/////////////////////////
$("html").on("click", ".checkmark.le", function () {
    debugger
    $("#QA_Modal_bill").modal("show");
    var id = "";
    id = parseInt($(this).data('id'));
    var data = JSON.stringify({
        Id: id,
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminHome/GetData_Bill",
        data: data,
        success: function (result) {
            debugger
            if (result != null) {
                var time = $("#show_time").html("");
                var Data =
                   '<h3 class="card-title d-block" style="font-size:14px;">Mã Oder: <small>' + result.order + '</small></h3>' +
                   '<div class="d-inline-block ">' +
                   '<span>Giờ vào: <small>' + result.inputTime + ' </small></span>' +
                   '<span>Giờ ra: <small>' + result.outTime + ' </small></span>' +
                   '<input type="hidden" id="Id_oder_details" value="' + result.Id + '"/> ' +
                   '</div>';
                time.append(Data);
                var content = $("#show_content").html("");
                var total = 0;
                for (let i = 0; i < result.listdata.length; i++) {
                    total += result.listdata[i].moneyy;

                    var data =
                    '<tr>' +
                    '<td class="text-center text-danger">' + (i + 1) + '</td>' +
                    '<td>' + result.listdata[i].content + '</td>' +
                    '<td class="text-right"><b class="text-danger">' + themdauphay(result.listdata[i].moneyy) + '</b></td>' +
                    '<td colspan="3"></td>' +
                    '</tr>';
                    content.append(data);
                }
                var data1 =
                    '<tr>' +
                    '<td class="text-left" colspan="3"> <b>Tổng</b> </td>' +
                    '<td class="text-right"><b class="text-danger">' + themdauphay(total) + '</b></td>' +
                    '<td colspan="3"></td>' +
                    '</tr>';
                content.append(data1);
                var giamgia = $("#giam_gia").html("");
                var tongphaitra_chuathue_chuaphi = total * (100 - result.phantramgia) / 100;
                var tienmatduocgiam = total - tongphaitra_chuathue_chuaphi;

                if (result.phantramgia > 0) {
                    var data_giamga =
                        '<td class="text-left" colspan="3"> <b>Giảm</b> </td>' +
                        '<td class="text-right"><b class="text-danger">' + result.phantramgia + "%" + "<small>" + "(" + "-" + themdauphay(tienmatduocgiam) + ")" + "</small>" + '</b></td>' +
                        '<td></td>';
                    giamgia.append(data_giamga);
                };
                var thue = $("#thueneuco").html("");
                if (result.thue > 0) {
                    var data_thue =
                        '<td class="text-left" colspan="3"> <b>Thuế</b> </td>' +
                        '<td class="text-right"><b class="text-danger">' + result.thue + "%" + '</b></td>' +
                        '<td></td>';
                    thue.append(data_thue);
                };
                var phuphi = $("#phuphi_neuco").html("");
                if (result.phuphi > 0) {
                    var data_phuphi =
                        '<td class="text-left" colspan="3"> <b>Phụ phí</b> </td>' +
                        '<td class="text-right"><b class="text-danger">' + themdauphay(result.phuphi) + '</b></td>' +
                        '<td></td>';
                    phuphi.append(data_phuphi);
                };
                //var tongphaitra_chuathue_chuaphi = total * (100 - result.phantramgia) / 100;
                //var tienmatduocgiam = total - tongphaitra_chuathue_chuaphi;
                //var tienmat = $("#giamgia_admin_tienmat").html("");
                //if (tienmatduocgiam > 0) {
                //    var data2 =
                //            '<td class="text-left" colspan="3"> <b>Tiền mặt</b></td>' +
                //            '<td class="text-right"><b class="text-danger">' + "-" + themdauphay(tienmatduocgiam) + '</b></td>' +
                //            '<td></td>';
                //    tienmat.append(data2);
                //}
                var tongphaitra_chuathue_cophi = result.phuphi;
                var tongphaitra_cothue_chuaphi = tongphaitra_chuathue_chuaphi * (100 + result.thue) / 100;
                var tongphaitra = tongphaitra_cothue_chuaphi + tongphaitra_chuathue_cophi;
                $("#tongphaithu").html(themdauphay(tongphaitra));
            } else {
                toastr.warning("Thất bại !");
            }
        },
        error: function () {
            toastr.error("Lỗi hệ thống !");
        }
    })

})
// Lưu hóa đơn update




function Chart_home() {
    $("#vert-tabs-home").show();
}