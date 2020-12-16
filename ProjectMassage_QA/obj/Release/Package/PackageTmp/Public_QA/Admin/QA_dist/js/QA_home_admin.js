
function Show_All() {
    $(".NowEmpty").attr("style", "display:inline-block");
    $(".HaveGuests").attr("style", "display:inline-block");
    $(".ImBusy").attr("style", "display:inline-block");

    $(".NowEmpty").css({
        'padding-left': '2px',
        'padding-right': '2px',
    });
    $(".HaveGuests").css({
        'padding-left': '2px',
        'padding-right': '2px',
    });
    $(".ImBusy").css({
        'padding-left': '2px',
        'padding-right': '2px',
    });
}
function Show_Room_Empty() {
    $(".HaveGuests").attr("style", "display:none");
    $(".ImBusy").attr("style", "display:none");
    $(".NowEmpty").attr("style", "display:inline-block");
    $(".NowEmpty").css({
        'padding-left': '2px',
        'padding-right': '2px',
    });
}
function Show_Room_Employee() {
    $(".HaveGuests").attr("style", "display:inline-block");
    $(".NowEmpty").attr("style", "display:none");
    $(".ImBusy").attr("style", "display:none");
    $(".HaveGuests").css({
        'padding-left': '2px',
        'padding-right': '2px',
    });
}
function Show_Room_Transit() {
    $(".NowEmpty").attr("style", "display:none");
    $(".HaveGuests").attr("style", "display:none");
    $(".ImBusy").attr("style", "display:inline-block");
    $(".ImBusy").css({
        'padding-left': '2px',
        'padding-right': '2px',
    });
}
//History
function Show_history() {
    debugger
    if ($("#zoom_history").val() == 1) {
        $("#QA_block").addClass('d-none');
        $("#history_home_admin").removeClass("d-none");
        $("#history_home_admin").addClass("d-block");
        $("#none_addshowhistory").css("display", "none");
        $("#html").html("<i class='fas fa-project-diagram'></i> | " + "SƠ ĐỒ");
        $("i.fas.fa-angle-double-right").css("display", "none");
        $("#zoom_history").val(2);
    } else {
        $("#QA_block").removeClass('d-none');
        $("#history_home_admin").removeClass("d-block");
        $("#history_home_admin").addClass("d-none");
        $("#none_addshowhistory").css("display", "inline-block");
        $("#html").html("<i class='fas fa-history'></i> " + "NHẬT KÝ");
        $("i.fas.fa-angle-double-right").css("display", "inline-block");
        $("#zoom_history").val(1);
    }

}
//History
function Show_giaodien() {
    debugger
    if ($("#zoom_giaodien").val() == 1) {
        $("#QA_block").addClass('d-none');
        $("#hide_giaodien").removeClass("d-none");
        $("#hide_giaodien").addClass("d-block");
        $("#html").addClass("d-none");
        $("#Show_employee_stafff").addClass("d-none");
        //$("#none_addshowhistory").css("display", "none");
        $("i.fas.fa-angle-double-right").css("display", "none");
        $("#zoom_giaodien").val(2);
    } else {
        $("#QA_block").removeClass('d-none');
        $("#hide_giaodien").removeClass("d-block");
        $("#hide_giaodien").addClass("d-none");
        $("#html").removeClass("d-none");
        $("#html").addClass("inline-block");
        $("#Show_employee_stafff").removeClass("d-none");
        $("#Show_employee_stafff").addClass("inline-block");
        //$("#none_addshowhistory").css("display", "inline-block");
        $("i.fas.fa-angle-double-right").css("display", "inline-block");
        $("#zoom_giaodien").val(1);
    }

};

function Del_Oder(id) {
    debugger
    var data = JSON.stringify({ Id: id });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminHome/Delete_Oder",
        data: data,
        success: function (result) {
            if (result == true) {
                $("#black_binz_" + id).remove();
            } else {
                alert("Bạn bị lổi");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
};

function Add_room_home() {
    $("#Modal_rooms").modal("show");
}
//xoa phong o trang home
$("html").on("click", "#Del_room_home", function () {
    debugger
    var OderroomAdmin2 = document.getElementsByClassName("OderroomAdmin2");
    var OderroomAdmin = document.getElementsByClassName("OderroomAdmin");
    var id = "";
    for (let j = 0; j < OderroomAdmin2.length; j++) {
        if (OderroomAdmin2[j].value == -1) {
            id = OderroomAdmin[j].value
        }
    }
    var data = JSON.stringify({ Id: id });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/Adminroom/Delete_room",
        data: data,
        success: function (result) {
            if (result == true) {
                $("#room_delete_" + id).remove();
            } else {
                alert("Bạn bị lổi");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
});
//function Show_employee_staff() {
//    if ($("#zoom_in_out").val() == 1) {
//        $(".card-body.room_zoom_out.black.direct-chat-messages").attr("style", "height :344px  !important");
//        $("#hide_chart").removeClass("d-none");
//        $("#zoom_in_out").val(2)
//    } else {
//        $(".card-body.room_zoom_out.black.direct-chat-messages").attr("style", "height :711px !important");
//        $(".card-body.room_zoom_out.black.direct-chat-messages").attr("style", "border: 1px solid white;");
//        $("#hide_chart").addClass("d-none");
//        $("#zoom_in_out").val(1)
//    };
//};
function Show_thongke() {
    if ($("#thongke").val() == 1) {
        $("#hide_show_thongke").addClass("d-none");
        $("#show_thong_ke_home").removeClass("d-none");
        $("#none_addshowhistory").css("display", "none");
        $("#html").css("display", "none");
        $("#Add_work").css("display", "none");
        $("#show_work").css("display", "none");
        $("#html_thongke").html("<i class='fas fa-project-diagram'></i> | " + "SƠ ĐỒ");
        $("#thongke").val(2);
    } else {
        $("#hide_show_thongke").removeClass("d-none");
        $("#show_thong_ke_home").addClass("d-none");
        $("#none_addshowhistory").css("display", "inline-block");
        $("#html").css("display", "inline-block");
        $("#show_work").css("display", "inline-block");
        $("#Add_work").css("display", "inline-block");
        $("#html_thongke").html("<i class='fas fa-signal'></i> " + "THỐNG KÊ");
        $("#thongke").val(1);
    }
};
function Hide_Oder_Right() {
    $("#hide_oder_home").addClass("d-none");
    $("#QA_block").removeClass("col-md-9.QA_block_home");
    $("#QA_block").addClass("col-md-12");
    $("#QA_card_left").css("display", "inline-block")
    $(".giaodien").css("display", "none");
};
function Hide_Oder_Left() {
    $("#QA_card_left").css("display", "none");
    $("#hide_oder_home").removeClass("d-none");
    $("#hide_oder_home").addClass("col-md-3");
    $("#QA_block").addClass("col-md-9.QA_block_home");
    $("#QA_block").removeClass("col-md-12");
    $(".giaodien").css("display", "inline-block");
};
//-------------------------------------------------------------------------------------------
$("html").on("click", ".paginate_button", function () {
    debugger
    var status_color_table = document.getElementsByClassName("status_color_table");
    var status = status_color_table.length;
    var id = "";
    for (var i = 0; i < status; i++) {
        id = status_color_table[i].value;
        if ($("#customSwitch").val() == 1) {
            $("#black_binz_" + id).attr("style", "background:white");
        } else {
            $("#black_binz_" + id).attr("style", "background:black");
        }
    }

})
//-------------------------------------------------------------------------------------------
function chang_color(id) {
    debugger
    if (id == 2) {
        $("aside").removeClass("sidebar-dark-primary");
        $("aside").addClass("bg-black");
        $("nav.navbar-light").removeClass("navbar-white");
        $("nav.navbar-light").addClass("bg-black");
        $(".content-wrapper").addClass("bg-black");

        $(".black").addClass("bg-black");
        $(".black").css("border", "1px solid white");


        $(".modal-body").addClass("bg-black");
        $(".modal-body").css("border", "1px solid white");
        $(".card-body.black.bg-black").css("border-top", "none");
        $(".defaul_QA").removeClass("card-primary");
        $(".defaul_QA").addClass("card-dark");
        $("#defaul_QA").removeClass("bg-primary");
        $("#defaul_QA").addClass("bg-dark");
        $(".main-sidebar").css("border-right", "1px solid white");
        $(".card-header").css("border", "1px solid");
        $(".quote-secondary").css("background", "black");
        $(".quote-secondary").css("border-left", "2px solid white");
        $(".vang").removeClass("badge-warning");
        $(".vang").addClass("badge-secondary");
        //$(".table.text-center td").attr("style", "background:black");
        $("i.fas.fa-bell").css("color", "rgb(156 154 154)");
        $(".fa-power-off").css("color", "white");
        $(".fa-unlock-alt").css("color", "rgb(156 154 154)");
        $(".QA_form-control").css("color", "#3e4144");
        //$(".defaul").addClass("bg-primary");
        //$(".defaul").removeClass("bg-default");
        $("input.form-control.le").css("background", "#241f1f");
    } else {
        $("aside").removeClass("bg-danger");
        $("aside").addClass("sidebar-dark-primary");
        $("nav.navbar-light").removeClass("navbar-danger");
        $("nav.navbar-light").addClass("navbar-white");
        $("nav.navbar-light").removeClass("bg-black");

        $(".content-wrapper").removeClass("bg-black");
        $(".black").removeClass("bg-black");
        $(".black").css("border", "0px");

        $(".modal-body").removeClass("bg-black");
        $(".defaul_QA").removeClass("card-dark");
        $(".defaul_QA").addClass("card-primary");
        $("#defaul_QA").removeClass("bg-dark");
        $("#defaul_QA").addClass("bg-primary");
        $(".main-sidebar").css("border-right", "none");
        $(".card-header").css("border", "none");
        $(".quote-secondary").css("background", "white");
        $(".quote-secondary").css("border-left", "2px solid red");
        $(".vang").addClass("badge-warning");
        $(".vang").removeClass("badge-secondary");
        //$(".table.text-center td").attr("style", "background:white");
        $("i.fas.fa-bell").css("color", "white");
        $(".fa-power-off").css("color", "black");
        $(".fa-unlock-alt").css("color", "red");
        $(".QA_form-control").css("color", "#027cf7");
        $("#border_0").css("border", "0px");
        $("input.form-control.le").css("background", "");
        //$(".defaul").removeClass("bg-primary");
        //$(".defaul").addClass("bg-default");
    }
};



$("html").on("click", "#customSwitch", function () {
    debugger
    var id_user = $("#user_hide").val();
    var id = $("#customSwitch").val();
    if (id == 1) {
        $("#customSwitch").val(2);
        id = 2;
    } else {
        $("#customSwitch").val(1);
        id = 1;
    }
    var data = JSON.stringify({
        Id: id_user,
        value: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminHome/Change_Color",
        data: data,
        success: function (result) {
            if (result) {
                debugger
                chang_color(id);
            } else {

            }
        },
        error: function () {
            alert("Error!");
        }
    });
})
//phong to thu nho phong
function Drag() {
    debugger
    var QA_range = parseInt(document.getElementById("vol").value);
    if (QA_range >= 0 && QA_range < 10) {
        $(".Drag_Cart").removeClass("col-md-2");
        $(".Drag_Cart").addClass("col-md-1");
        $(".Drag_Cart").removeClass("col-md-3");
        $(".Drag_Cart").removeClass("col-md-4");
        $(".Drag_Cart").removeClass("col-md-6");
        $("#none").html("")
    } else if (QA_range >= 10 && QA_range < 22) {
        $(".Drag_Cart").removeClass("col-md-1");
        $(".Drag_Cart").addClass("col-md-2");
        $(".Drag_Cart").removeClass("col-md-3");
        $(".Drag_Cart").removeClass("col-md-4");
        $(".Drag_Cart").removeClass("col-md-6");
    } else if (QA_range >= 22 && QA_range < 35) {
        $(".Drag_Cart").removeClass("col-md-2");
        $(".Drag_Cart").addClass("col-md-3");
        $(".Drag_Cart").removeClass("col-md-4");
        $(".Drag_Cart").removeClass("col-md-6");
    } else if (QA_range >= 35 && QA_range < 45) {
        $(".Drag_Cart").removeClass("col-md-3");
        $(".Drag_Cart").addClass("col-md-4");
        $(".Drag_Cart").removeClass("col-md-6");
    } else if (QA_range >= 45 && QA_range <= 50) {
        $(".Drag_Cart").removeClass("col-md-4");
        $(".Drag_Cart").addClass("col-md-6");
    }

};
//an hien pass
$('.unmask').on('click', function () {
    if ($(this).prev('input').attr('type') == 'password')
        $(this).prev('input').prop('type', 'text');
    else
        $(this).prev('input').prop('type', 'password');
    return false;
});
//check pass trùng
function Change_Password() {
    debugger
    var pass = $("#Pass_SC").val();
    var id = $("#user_hide").val();
    var data = JSON.stringify({
        id: id,
        IdChange_pass: pass
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminHome/Change_Passwords",
        data: data,
        success: function (result) {
            debugger
            if (result) {
                $("input#Pass_SC").css({
                    "border": "1px solid green",
                    "background": "rgb(160 239 163)",
                })
                $(".fas.fa-check-circle").css("display", "inline-block");
                document.getElementById("Pass_new1").disabled = false;
                document.getElementById("Pass_new2").disabled = false;
                $("#Pass_new1").css("cursor", "auto");
                $("#Pass_new2").css("cursor", "auto");
            } else {
                $("input#Pass_SC").css({
                    "border": "1px solid red",
                    "background": "#fee5e5",
                })
                $(".fas.fa-check-circle").css("display", "none");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
};

//check pass
$(document).ready(function () {
    $("#Pass_new2").keyup(function () {
        debugger
        var p1 = $("#Pass_new1").val();
        var p2 = $("#Pass_new2").val();
        if (p1 == p2 || p2 == p1) {
            $("#Pass_new1").css({
                "border": "1px solid green",
                "background": "rgb(160 239 163)",
            })
            $("#Pass_new2").css({
                "border": "1px solid green",
                "background": "rgb(160 239 163)",
            })
            $(".fas.fa-check").css("display", "block");
            $("a.btn.btn-xs.btn-primary.p-0").removeClass("disabled");
            $("#logoutnone").css("display", "none");
        } else {
            $("#Pass_new1").css({
                "border": "1px solid red",
                "background": "#fee5e5",
            })
            $("#Pass_new2").css({
                "border": "1px solid red",
                "background": "#fee5e5",
            })
            $(".fas.fa-check").css("display", "none");
        }
    });
});
//doi pass nhan vien
function Last_Change_Password() {
    debugger
    var passnew = $("#Pass_new2").val();
    var id = $("#user_hide").val();
    var data2 = JSON.stringify({
        id: id,
        passss: passnew,
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminHome/Update_Pass",
        data: data2,
        success: function (result) {
            if (result == true) {
                toastr.success("Cập nhật mật khẩu thành công !");
            } else {
                toastr.warning("Thất bại !");
            }
        }
    });
};
$("html").on("click", "#Save_Bill", function () {
    debugger
    var ID_Oder = $("#Id_oder_details").val();
    var data = JSON.stringify({
        Id: ID_Oder,
    });
    $.ajax({
        contentType: 'application/json;charset=utf-8',
        dataType: 'Json',
        type: 'POST',
        url: '/Admin/AdminHome/Save_Bill_Final',
        data: data,
        success: function (result) {
            if (result) {
                var OBJ = JSON.parse(result.list_id_nhanvien)
                for (var i = 0; i < OBJ.length; i++) {
                    $("#travetrangthainhanvien_" + OBJ[i].EmployeeId).removeClass("QA_disabled");
                    $("#addemployee_" + OBJ[i].EmployeeId).removeClass("warning");
                    $("#addemployee_" + OBJ[i].EmployeeId).addClass("sussecc");
                }
                var OBJ_room = JSON.parse(result.list_id_phong)
                console.log(OBJ_room);
                for (let j = 0; j < OBJ_room.length; j++) {
                    $("#countdown_" + OBJ_room[j].EmployeeId).html("");
                    $("#countdown_" + OBJ_room[j].EmployeeId).removeClass("countdown");
                    $("#card-QA_Status_" + OBJ_room[j].EmployeeId).removeClass("nhaynhay");
                    $("#card-QA_Status_" + OBJ_room[j].EmployeeId).removeClass("cokhach");
                    $("#card-QA_Status_" + OBJ_room[j].EmployeeId).addClass("dangdon");
                }
                Ve_Trang_Thai_Online(ID_Oder);//Chuyen trang thai phong tu co khach ve online
            } else {
                toastr.warning("Thất bại !");
            }
        }
    })
});
//Chuyen trang thai phong tu co khach ve online
function Ve_Trang_Thai_Online(id) {
    debugger
    var data = JSON.stringify({
        Id_oder: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'Json',
        type: 'POST',
        data: data,
        url: "/Admin/AdminHome/Chuyen_Trang_Thai_Phong_Online",
        success: function (result) {
            if (result) {
                var OBJ = JSON.parse(result.th);
                debugger
                var user = $("#user_hide").data('color');
                var array = user.split("|");
                for (var i = 0; i < OBJ.length; i++) {
                    $("#card-QA_Status_" + OBJ[i].EmployeeId).css({
                        'background-color': array[6],
                    });
                    $("#hide_bill_" + OBJ[i].OrderId).remove();
                    $("#room_delete_" + OBJ[i].EmployeeId).removeClass("QA_disabled");
                    $("#room_delete_" + OBJ[i].EmployeeId).removeClass("HaveGuests");
                    $("#room_delete_" + OBJ[i].EmployeeId).addClass("ImBusy");
                    $("#room_delete_" + OBJ[i].EmployeeId).css("pointer-events", "auto");
                    $("#card-QA_Status_" + OBJ[i].EmployeeId).removeClass("bg-warning");
                    $("#choose_" + OBJ[i].EmployeeId).css("color", "white");
                    $("#choose_icon_" + OBJ[i].EmployeeId).html("<i class='fas fa-hands-wash'></i>");
                    $("#choose_html_" + OBJ[i].EmployeeId).html("ĐANG DỌN");
                    $("#doimau_" + OBJ[i].EmployeeId).val(2);
                    $("#getroom_" + OBJ[i].EmployeeId).val(0);
                };
                debugger
                $("#count_sansang").html(result.pt);
                $("#count_cokhach").html(result.pck);
                $("#count_dangban").html(result.pb);
                $("#QA_Modal_bill").modal("hide");
                toastr.success("Cập nhật thành công !");
            } else {

            }
        },
        error: function () {
            alert("Error!");
        }
    })
};
//chuyen trạng thái phòng đang dọn
$("html").on("click", "#Status_room_home", function () {
    debugger
    var id_status_ImBusy = $(this).data('inline');
    var data = JSON.stringify({
        Id: id_status_ImBusy,
    });
    $.ajax({
        contentType: 'application/json;charset=utf-8',
        dataType: 'Json',
        type: 'POST',
        url: '/Admin/AdminHome/Chang_Status_room',
        data: data,
        success: function (result) {
            if (result) {
                debugger
                toastr.success("Cập nhật thành công !");
                var user_hide = $("#user_hide").data('color');
                var array = user_hide.split("|");
                $("#card-QA_Status_" + id_status_ImBusy).removeClass("bg-secondary");
                $("#card-QA_Status_" + id_status_ImBusy).removeClass("dangdon");
                $("#card-QA_Status_" + id_status_ImBusy).addClass("dangtrong");
                $("#card-QA_Status_" + id_status_ImBusy).css({
                    'background-color': array[5],
                });
                $("#choose_" + id_status_ImBusy).css("color", "white");
                $("#choose_icon_" + id_status_ImBusy).html("<i class='fas fa-diagnoses'></i>");
                $("#choose_html_" + id_status_ImBusy).html("ONLINE");
                $("#doimau_" + id_status_ImBusy).val(0);
                debugger
                $("#count_sansang").html(result.pt);
                $("#count_cokhach").html(result.pck);
                $("#count_dangban").html(result.pb);
            } else {
                toastr.warning("Thất bại !");
            }
        }
    });
});

//Chuyen trang thai sang phong bận
function PhongBan() {
    debugger
    var OderroomAdmin = document.getElementsByClassName("OderroomAdmin");
    var OderroomAdmin2 = document.getElementsByClassName("OderroomAdmin2");
    var Listroom = "";
    for (var i = 0; i < OderroomAdmin2.length; i++) {
        if (OderroomAdmin2[i].value == -1) {
            if (Listroom == "") {
                Listroom = $("#getroom_" + OderroomAdmin[i].value).data('id');
            }
            else {
                Listroom = Listroom + "|" + $("#getroom_" + OderroomAdmin[i].value).data('id');
            }
        }
    }
    var phongban = [];
    phongban.length = 0;
    var phong = Listroom.toString().split("|");
    for (var j = 0; j < phong.length; j++) {
        phongban.push({
            Id: phong[j]
        })
    };
    var data = JSON.stringify({
        Id: phongban
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'Json',
        type: 'POST',
        data: data,
        url: "/Admin/AdminHome/Chuyen_Trang_Thai_Phong_Ban",
        success: function (result) {
            if (result) {
                debugger
                var user = $("#user_hide").data('color');
                var array = user.split("|");
                for (var i = 0; i < phong.length; i++) {
                    $("#card-QA_Status_" + phong[i]).css({
                        'background-color': array[6],
                    });
                    $("#card-QA_Status_" + phong[i]).removeClass("bg-success");
                    $("#choose_" + phong[i]).css("color", "white");
                    $("#choose_icon_" + phong[i]).html("<i class='fas fa-hands-wash'></i>");
                    $("#choose_html_" + phong[i]).html("ĐANG DỌN");
                    $("#doimau_" + phong[i]).val(2);
                    $("#getroom_" + phong[i]).val(0);
                };
                debugger
                $("#count_sansang").html(result.pt);
                $("#count_cokhach").html(result.pck);
                $("#count_dangban").html(result.pb);

                toastr.success("Cập nhật thành công !");
            } else {

            }
        },
        error: function () {
            alert("Error!");
        }
    })
};
//chú thích
$(document).ready(function () {
    var user = $("#user_hide").data('color');
    var array = user.split("|");
    //console.log(array)
    var trang_thai_chu_thich = array[16];
    if (trang_thai_chu_thich == 1) {
        var get_data = $("#lepvcccccccccccccccc").html("");
        var chuthichb =
            '<div id ="Sansang"></div>' +
            '<small id="ss">SẴN SÀNG(<b id="count_sansang"></b>)</small>' +
            '<div id="cokhach"></div>' +
            '<small id="ck">CÓ KHÁCH(<b id="count_cokhach"></b>)</small>' +
            '<div id="dangban"></div>' +
            '<small id="db"> ĐANG BẬN(<b id="count_dangban"></b>)</small>';
        get_data.append(chuthichb);
        $("#Sansang").css({
            'background-color': array[5]
        });
        $("#cokhach").css({
            'background-color': array[4],
        });
        $("#dangban").css({
            'background-color': array[6],
        });
    }
});

//dong ca lam viec
$("html").on("click", "#show_work", function () {
    $("#Modal_Close_work_shift").modal('show');
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'Json',
        type: 'POST',
        url: "/Admin/AdminHome/GetData_Money",
        success: function (result) {
            $("#Tong_tien").val(themdauphay(result.Tien_trong_ca));
            $("#Tong_tien_mat").val(themdauphay(result.Tien_trong_ca));
            $("#Tien_dau_ca").val(themdauphay(result.Tien_ca_truoc));
            $("#Tong_tien_cuoi_ca").val(themdauphay(result.Tien_trong_ca + result.Tien_ca_truoc));
        },
        error: function () {
            alert("Error!");
        }
    })
});

//phieu thu
$("html").on("click", "#phieuthu", function () {
    $("#modal_thutien").modal('show');
});

//phieu chi
$("html").on("click", "#phieuchi", function () {
    $("#modal_chitien").modal('show');
});

//Mở ca lam viec
//$(document).ready(function () {
//    $("#Add_work").click(function () {
//        $("#Modal_work_shift").modal('show');
//    })
//});
$("html").on("click", "#Add_work", function () {
    $("#Modal_work_shift").modal('show');
});



$("html").on("click", "#save_work_shift", function () {
    debugger
    var NameEmployee = $("#NameEmployee").val();
    var chose_work_shift = $("#chose_work_shift").val();
    var FirtTime = $("#FirtTime").val();
    var LastTime = $("#LastTime").val();
    var Note = $("#Note_shift").val();
    var firt_money = $("#Tien_ca_truoc_ban_giao").val();
    var add_work_shift = [];
    add_work_shift.length = 0;
    add_work_shift.push({
        LoaiCaLamViecId: chose_work_shift,
        FirtTime: FirtTime,
        LastTime: LastTime,
        NameEmployee: NameEmployee,
        Note: Note,
        Tien_ca_truoc_ban_giao: firt_money,
    });
    var data = JSON.stringify({
        Id: add_work_shift
    });
    $.ajax({
        contentType: 'application/json;charset=utf-8',
        dataType: 'Json',
        type: 'POST',
        url: '/Admin/AdminWorkShift/Save_shift',
        data: data,
        success: function (result) {
            if (result == true) {
                alert("thanh cong")
                $("#Modal_work_shift").modal('hide');
                Status_room(1);
            } else {
                alert("that bai")
            }
        }
    });
});
function Doi_phay(Tong_tien) {
    if (Tong_tien == null) {
        return 0;
    }
    else {
        while (Tong_tien.indexOf(",") > -1) {
            Tong_tien = Tong_tien.replace(",", "")
        }
        return parseFloat(Tong_tien);
    }
};
function Nguoiduocgiao() {
    var nguoilam = $("#id_nguoibangao").val();
    var nguoinhan = $("#Id_nhan").val();
    if (nguoilam == nguoinhan) {
        toastr.warning("Người nhận không phù hợp !");
    }
};
$("html").on("click", "#dong_ca", function () {
    var nguoilam = $("#id_nguoibangao").val();
    var nguoinhan = $("#Id_nhan").val();
    if (nguoinhan == 0) {
        toastr.warning("Chọn người nhận ca !");
    } else if (nguoilam == nguoinhan) {
        toastr.warning("Người nhận không phù hợp !");
    }
    else {
        debugger
        var Id_nhan = $("#Id_nhan").val();
        var Tong_tien = $("#Tong_tien").val();
        var Tong_tien_mat = $("#Tong_tien_mat").val();
        var Tien_dau_ca = $("#Tien_dau_ca").val();
        var Tong_tien_cuoi_ca = $("#Tong_tien_cuoi_ca").val();
        var Note_shift = $("#Note_shift").val();

        var save_shift = [];
        save_shift.length = 0;
        save_shift.push({
            Id_nhan: Id_nhan,
            Tong_tien_thu_trong_ca: Doi_phay(Tong_tien),
            Tong_tien_mat: Doi_phay(Tong_tien_mat),
            Tien_ca_truoc_ban_giao: Doi_phay(Tien_dau_ca),
            Tong_tien_cuoi_ca: Doi_phay(Tong_tien_cuoi_ca),
            Note_shift: Note_shift
        });
        var data = JSON.stringify({
            Id: save_shift,
        });

        $.ajax({
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            type: 'POST',
            url: "/Admin/AdminHome/Change_Status",
            data: data,
            success: function (result) {
                if (result) {
                    Status_room(2)
                    $("#Modal_Close_work_shift").modal('hide');
                    toastr.success("Đóng ca thành công");
                } else {
                }
            },
            error: function () {
                alert("Error!");
            }
        });
    }//het else
});
$(document).ready(function () {
    var status_shift = $("#status_shift").val();
    Status_room(status_shift);
})
function Status_room(id) {
    if (id == 1) {
        $("#show_room_home").css("pointer-events", "auto");
        $("#show_work").removeClass("d-none");
        $("#Add_work").addClass("d-none");
        $(".QA_table_bill").css("pointer-events", "auto");
        $(".QA_table_oder").css("pointer-events", "auto");
    } else if (id == 2) {
        $("#show_room_home").css("pointer-events", "none");
        $("#show_work").addClass("d-none");
        $("#Add_work").removeClass("d-none");
        $(".QA_table_bill").css("pointer-events", "none");
        $(".QA_table_oder").css("pointer-events", "none");
    }
    else {
        $("#show_room_home").css("pointer-events", "none");
        $("#show_work").addClass("d-none");
        $("#Add_work").addClass("d-none");
        $(".QA_table_bill").css("pointer-events", "none");
        $(".QA_table_oder").css("pointer-events", "none");
    }
};
//load
$("html").on("click", "#Reload_page", function () {
    location.reload();
});

//Xem chi tiet nhan vien
//$("html").on("click", ".employee_details", function () {
//    $("#details_employeeStaff").modal('show');
//    var id = $(this).data('id');
//    var data = JSON.stringify({
//        Id: id,
//    });
//    $.ajax({
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        type: 'POST',
//        url: "/Admin/AdminHome/GET_Details_Employee",
//        data: data,
//        success: function (result) {
//            debugger
//            var OBJ = JSON.parse(result);
//            if (OBJ != null) {
//                var Image_details = $("#Show_details_employeeee").html("");
//                if (OBJ.E_ImageList != null) {
//                    var anh = OBJ.E_ImageList.split("|");
//                    for (var i = 0; i < anh.length; i++) {
//                        var Data =
//                            '<div class="col-4">' +
//                            '<div class="card">' +
//                            '<img class="card-img-top" src="' + anh[i] + '" alt="QA" style="height: 235px">' +
//                            '</div>' +
//                            '</div>';
//                        Image_details.append(Data);
//                    }
//                }
//                $("#name_employee").html(OBJ.E_Name);
//                var sao = "";
//                for (var i = 0; i < 5; i++) {
//                    if (i < OBJ.E_NumberStar_View1) {
//                        sao += "<i class='fa fa-star' style='padding:3px;color: #f5ab52'></i>"
//                    }
//                }
//                $("#number_star").html(sao);

//                //$("#total_review").html(OBJ.);
//                //$("#total_star").html(OBJ.);
//                //$("#saotrungbinh").html(OBJ.);
//            } else {

//            }
//        },
//        error: function () {
//            alert("Error!");
//        }
//    });
//});

$('html').on('change', "#oder_ngay", function () {
    serach_oder();
});
$('html').on('change', "#oder_denngay", function () {
    serach_oder();
});

function serach_oder() {
    debugger
    var oder_ngay = $("#oder_ngay").val();
    var oder_denngay = $("#oder_denngay").val();
    var id = oder_ngay + "|" + oder_denngay;
    var SetData = $("#button_search_oder").html("");
    Data_oder = '<a class="btn btn-xs btn-warning ml-3" onclick="lichsu_oder()" >Tìm kiếm<i class="fas fa-search ml-2"></i></a>';
    if (oder_ngay != null && oder_ngay != "" && oder_denngay != null && oder_denngay != "") {
        SetData.append(Data_oder);
    }
}


function lichsu_oder() {
    debugger
    var oder_ngay = $("#oder_ngay").val();
    var oder_denngay = $("#oder_denngay").val();
    var id = oder_ngay + "|" + oder_denngay;
    var data = JSON.stringify({
        Id: id,
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminHome/History_Oder_Home",
        data: data,
        success: function (result) {
            debugger
            if (result != null) {
                var obj = JSON.parse(result)
                var length = obj.length;
                $("#count_banghi").html("Tìm thấy" + '<b style="color:red;padding-left:5px;padding-right:5px;">' + length + '</b>' + "bản ghi");
                var SetDate = $("#show_oder_history").html("");
                for (var i = 0; i < length; i++) {
                    var time = obj[i].DayNew
                    var time2 = moment(time).format("MM/DD/YYYY");
                    var data =
                        '<tr>' +
                        '<td class="text-danger">' + i + '</td>' +
                        '<td class="text-left">' + obj[i].O_number + '</td>' +
                        '<td class="text-left">' + obj[i].NhanVienID + '</td>' +
                        '<td class="text-left">' + time2 + '</td>' +
                        '<td class="text-left">' + obj[i].phantramgiam + '</td>' +
                        '<td class="text-left">' + obj[i].Note + '</td>' +
                        '</tr>';
                    SetDate.append(data);
                }
            } else {
                "không có else"
            }
        },
        error: function () {
            alert("Error!");
        }
    });
};

$("html").on("click", "#thugon", function () {
    debugger
    var an = $("#andoimau").val();
    if (an == 1) {
        $(".giaodien").css("display", "none");
        $(".chuthich").css("display", "none");
        $("#andoimau").val(2);
    } else {
        $(".giaodien").css("display", "inline-block");
        $(".chuthich").css("display", "inline-block");
        $("#andoimau").val(1);
    }
});

function Get_Data_Oder_Client() {
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'GET',
        url: "/Admin/AdminHome/Get_Oder_Data_Client_New",
        success: function (data) {
            var result = JSON.parse(data.list_oder_client);
            debugger
            var time_oder = moment().format('L');
            var view = "|";
            var id_daview = document.getElementsByClassName("QA_CheckOder");
            for (var j = 0; j < id_daview.length; j++) {
                view += id_daview[j].value + "|";
            }
            var list_oder = result.length;
            var SetDate = $("#oder_new_client_pvc");
            for (var i = 0; i < list_oder; i++) {
                debugger
                if (view.indexOf("|" + result[i].Id + "|") === -1) {
                    var phantram = "";
                    if (result[i].Phantramgiam === null) {
                        phantram = "";
                    }
                    else {
                        phantram += result[i].Phantramgiam + "%";
                    }
                    var Set_data =
                        '<tr id="xoasaukhicheckinxong_' + result[i].Id + '">' +
                        '<td class="position-relative">' +
                        '<span class="new_oder_home"><img src="/ImageData/new.gif" alt="QA_TECH"/></span>' +
                        '<label class="containerr">' +
                        '<input type="radio" class="QA_CheckOder" id="IdService_' + result[i].Id + '" data-name="' + result[i].Id_tang + '" data-id="' + result[i].Id_dichvu + '" name="checkedoder" value="' + result[i].Id + '">' +
                        '<span class="checkmark"></span>' +
                        '</label>' +
                        '</td>' +
                        '<td>' +
                        '<span id="IdCate_' + result[i].Id + '" data-name="' + result[i].Id_tang + '" data-id="' + result[i].Id_service2 + '"><b>' + result[i].Tendichvu + '</b></span>' +
                        '</td>' +
                        ' <td><b>' + result[i].Tentheloai + '</b></td>' +
                        '<td><span><b>' + result[i].Nhanvienphucvu + '</b></span></td>' +
                        '<td><b class="text-right text-danger">' + phantram + '</b></td>' +
                        '<td colspan="1">' +
                        ' <input type="hidden" data-id="' + result[i].Id_tang_nhanvien + '" data-name="' + result[i].Id_nhanvien + '" id="hide_' + result[i].Id + '" value="0">' +
                        '<i style="color: green;font-size:13px;" class="fa fa-plus-circle" id="show_details_' + result[i].Id + '" onclick="ShowDetails(' + result[i].Id + ')"></i>' +
                        '</td>' +
                        '</tr>' +
                        '</tr>' +
                        '<tr id="xoasaukhicheckinxong1_' + result[i].Id + '">' +
                        '<td colspan="6" class="border-0">' +
                        '<blockquote id="HideDetails_' + result[i].Id + '" class="quote-secondary d-none text-left text-xs" style="border-left: 2px solid red; margin: 0px 0px 0px 6px; padding-bottom: 5px;">' +
                        '<p class="mb-0 pl-3">' + result[i].Ghi_chu + '</p>' +
                        '<small class="ml-3 m-0 badge badge-warning ">Ngày:' + time_oder + '|Mã oder:' + result[i].Ma_Oder + '</small>' +
                        '</blockquote>' +
                        '<input type="hidden" id="maoder" value="' + result[i].Ma_Oder + '">' +
                        '</td>' +
                        '</tr>';
                    SetDate.append(Set_data);
                }
            }
            //
            //tach thoi gian hien tai
            var thoigianhientai = new Date();
            var giay_hientai = 60 - thoigianhientai.getSeconds();
            var gio_phut_hientai = moment(thoigianhientai).format("h:mm A");
            while (gio_phut_hientai.indexOf(" ") > -1) {
                gio_phut_hientai = gio_phut_hientai.replace(" ", "");
            }
            var gio_sang_toi_pm_am_hientai = gio_phut_hientai.substring(gio_phut_hientai.length - 2, gio_phut_hientai.length);
            var gio_ra_chua_cat_hientai = gio_phut_hientai.substring(0, gio_phut_hientai.length - 2);
            var mang_hientai = gio_ra_chua_cat_hientai.split(":");
            var gio_ra_hien_tai = mang_hientai[0];
            var phut_ra_hien_tai = mang_hientai[1];
            var gio_ra_phut_hien_tai = gio_ra_hien_tai * 60;
            var tong_gio_va_phut_hien_tai = gio_ra_phut_hien_tai + parseInt(phut_ra_hien_tai);
            var pm_am_ra_phut_hien_tai = 0;
            if (gio_sang_toi_pm_am_hientai == "PM") {
                if (gio_ra_hien_tai < 12) {
                    pm_am_ra_phut_hien_tai = 12 * 60;
                }
            }
            var tong_gio_phut_cong_pm_am_hien_tai = tong_gio_va_phut_hien_tai + pm_am_ra_phut_hien_tai;
            //'''''''''''''''''''''''''''''''''
            var result2 = JSON.parse(data.list_room_and_time);
            for (var i = 0, length = result2.length; i < length; i++) {
                var ra = result2[i].LastHourCheckin;
                while (ra.indexOf(" ") > -1) {
                    ra = ra.replace(" ", "");
                }
                var gio_sang_toi_pm_am = ra.substring(ra.length - 2, ra.length);
                var gio_ra_chua_cat = ra.substring(0, ra.length - 2);
                var mang = gio_ra_chua_cat.split(":");
                var gio_ra = mang[0];
                var phut_ra = mang[1];
                var gio_ra_phut = gio_ra * 60;
                var tong_gio_va_phut = gio_ra_phut + parseInt(phut_ra);
                var pm_am_ra_phut = "";
                if (gio_sang_toi_pm_am == "PM") {
                    if (gio_ra < 12) {
                        pm_am_ra_phut = 12 * 60;
                    }
                }
                var tong_gio_phut_cong_pm_am = tong_gio_va_phut + pm_am_ra_phut;
                var tongsophutconlai = tong_gio_phut_cong_pm_am - tong_gio_phut_cong_pm_am_hien_tai;
                var sogioconlai = 0;
                var sogioconlai = Math.floor((parseInt(tongsophutconlai) / 60));
                //if (gio_sang_toi_pm_am != gio_sang_toi_pm_am_hientai) {
                //    sogioconlai = sogioconlai - 1;
                //}
                var hetgio = "";
                var sophutconlai = parseInt(tongsophutconlai) % 60;
                var hetgio = 1;
                if (sophutconlai < 5 && sogioconlai <= 0) {
                    var hetgio = 2;
                    if (giay_hientai < 10) {
                        $("#countdown_" + result2[i].EmployeeId).text("0" + sogioconlai + ":" + "0" + sophutconlai + ":" + "0" + giay_hientai);
                    } else {
                        $("#countdown_" + result2[i].EmployeeId).text("0" + sogioconlai + ":" + sophutconlai + ":" + giay_hientai);
                    }
                    if (hetgio == 2) {
                        $("#card-QA_Status_" + result2[i].EmployeeId).addClass("nhaynhay");
                        $("#choose_html_" + result2[i].EmployeeId).html("SẮP HẾT GIỜ");
                    }
                }
                else {
                    if (giay_hientai < 10) {
                        $("#countdown_" + result2[i].EmployeeId).text("0" + sogioconlai + ":" + sophutconlai + ":" + "0" + giay_hientai);
                    }
                    else {
                        $("#countdown_" + result2[i].EmployeeId).text("0" + sogioconlai + ":" + sophutconlai + ":" + giay_hientai);
                    }
                };
                if (sophutconlai < 0 || sogioconlai < 0 || giay_hientai < 0) {
                    $("#countdown_" + result2[i].EmployeeId).text("00" + ":" + "00" + ":" + "00");
                    $("#choose_html_" + result2[i].EmployeeId).html("HẾT GIỜ");
                }
            }
        },
        error: function () {
            toastr.error(" Error !");
        }
    })
};
//setInterval(Get_Data_Oder_Client, 1000);
//full screen
var elem = document.documentElement;
function openFullscreen() {
    $("#nonenone").removeClass("d-none");
    $("#nonenone").addClass("d-inline-block");
    $("#none2").addClass("d-none");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
};
function troioi10() {
    closeFullscreen();
    SCREEN_USER1(1);
}
function lepvc2() {
    openFullscreen();
    SCREEN_USER1(2);
}
function closeFullscreen() {
    $("#nonenone").addClass("d-none");
    $("#nonenone").removeClass("d-inline-block");
    $("#none2").removeClass("d-none");
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};

function SCREEN_USER1(id) {
    debugger
    var id_user = $("#user_hide").val();
    var data = JSON.stringify({
        Id: id_user,
        value: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminHome/Change_Screen",
        data: data,
        success: function (result) {
            if (result) {
               Chang_Screen(id);
            } else {

            }
        },
        error: function () {
            alert("Error!");
        }
    });
};

function Chang_Screen(id) {
    if (id == 1) {
        closeFullscreen();
    }
    else if (id == 2) {
        openFullscreen();
    }
};

// show_hide menu left
$("html").on("click", "#left_right_menu_home_lepvc", function () {
    var x = $("#left_menu_show_hide").val();
    if (x == 1) {
        $("#left_menu_show_hide").val(2);
    } else {
        $("#left_menu_show_hide").val(1);
    }
});