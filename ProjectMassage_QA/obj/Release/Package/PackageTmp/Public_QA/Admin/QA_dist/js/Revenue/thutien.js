$("html").on("click", "#Modal_thutien", function () {
    $("#modal_thutien").modal("show");
    $("#Modal_work_form")[0].reset();
    $("#nguoinop").html("");
    $("#id_phieuthu").val(0);
    $("#sochungtu_thu").val("");
    var ngay = $("#ngaychungtu").val();
    debugger
    taosochungtu(ngay);
});

//add 
$("html").on("click", "#save_phieuthu", function () {
    var nguoinoptien = $("#nguoinoptien").val();
    if (nguoinoptien == "") {
        toastr.warning("Người nộp không được để trống !");
    } else {
    var sodienthoai = $("#sodienthoaithu").val();
    var diachi = $("#diachithu").val();
    var sotien_thu = $("#sotienthu").val();
    var noidungthu = $("#noidungthu").val();
    var Note_thu = $("#Note_thu").val();
    var nguoinop = $("#nguoinop").html();
    var nguoilap = $("#nguoilap").html();
    var sochungtu_thu = $("#sochungtu_thu").val(); 
    var ngaychungtu = $("#ngaychungtu").val();
    var id = $("#id_phieuthu").val();

    var phieuthu = [];
    phieuthu.length = 0;
    phieuthu.push({
        Id: id,
        nguoinoptien: nguoinoptien,
        sodienthoai: sodienthoai,
        diachi: diachi,
        sotien_thu: sotien_thu,
        noidungthu: noidungthu,
        Note_thu: Note_thu,
        nguoinop: nguoinop,
        nguoilap: nguoilap,
        ngaylap: ngaychungtu,
        sochungtu_thu: sochungtu_thu

    })
    var data = JSON.stringify({
        arr_phieuthu: phieuthu
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCollectMoney/Save",
        data: data,
        success: function (result) {
            if (result.sussecc == true) {
                toastr.success("Hoàn thành thu tiền !");
                if (id == 0) {
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result.Id + "'>" +
                                    "<td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                                    "<td id='sochungtu_thu_" + result.Id + "'>" + sochungtu_thu + " </td>" +
                                    "<td id='nguoilap_" + result.Id + "'>" + nguoilap + "</td>" +
                                    "<td id='nguoinoptien_" + result.Id + "'>" + nguoinoptien + "</td>" +
                                    "<td class='text-right' id='sotien_thu_" + result.Id + "'><b class='text-danger'>" + themdauphay(sotien_thu) + "</b></td>" +
                                    "<td id='sodienthoai_" + result.Id + "'>" + sodienthoai + "</td>" +
                                    "<td id='noidungthu_" + result.Id + "'>" + noidungthu + "</td>" +
                                    "<td id='Note_thu_" + result.Id + "'>" + Note_thu + "</td>" +
                                "</tr>";
                    showbody.append(Data);
                    $("#modal_thutien").modal("hide");
                } else {
                    $("#sochungtu_thu_" + id).val(sochungtu_thu);
                    $("#nguoilap_" + id).html(nguoilap);
                    $("#nguoinoptien_" + id).html(nguoinoptien);
                    $("#sotien_thu_" + id).html("<b class='text-danger text-right'>" + themdauphay(sotien_thu) + "</b>");
                    $("#sodienthoai_" + id).html(sodienthoai);
                    $("#noidungthu_" + id).html(noidungthu);
                    $("#Note_thu_" + id).html(Note_thu);
                    $("#modal_thutien").modal("hide");
                }
            } else {
                toastr.warning("Thất bại !");
            }
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    });
    }//end else
});
//edit
$("html").on("click", "#edit_phieuthu", function () {
    var activecheckedit = document.getElementsByClassName("activecheckedit");
    var id = 0;
    for (let j = 0; j < activecheckedit.length; j++) {
        if (activecheckedit[j].checked == true) {
            id = parseInt(activecheckedit[j].value);
        }
    }
    var data = JSON.stringify({
        Id: id
    });
    $("#Modal_work_form")[0].reset();
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCollectMoney/Edit",
        data: data,
        success: function (result) {
            $("#nguoinoptien").val(result.nguoinoptien);
            $("#sodienthoai").val(result.sodienthoai);
            $("#diachi").val(result.diachi);
            $("#sotien").val(result.sotien_thu);
            $("#noidungthu").val(result.noidungthu);
            $("#Note_thu").val(result.Note_thu);
            $("#nguoinop").html(result.nguoinop);
            $("#nguoilap").html(result.nguoilap);
            $("#id_phieuthu").val(id);
            $("#sochungtu_thu").val(result.sochungtu_thu);
            $("#modal_thutien").modal("show");
        },
        error: function () {
            alert("Error!");
        }
    });

});
//delete
$("html").on("click", "#delete_phieuthu", function () {
    var activecheckedit = document.getElementsByClassName("activecheckedit");
    var id = 0;
    for (let j = 0; j < activecheckedit.length; j++) {
        if (activecheckedit[j].checked == true) {
            id = parseInt(activecheckedit[j].value);
        }
    }
    var data = JSON.stringify({
        Id: id
    });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCollectMoney/Delete",
        data: data,
        success: function (result) {
            if (result == true) {
                alert("Bạn xóa thành công");
                $("#row_" + id).remove();
                $("#Modal_work_form")[0].reset();
            } else {
                alert("Bạn bị lổi");
            }
        },
        error: function () {
            alert("Error!");
        }
    });

});
function Ngay_chung_tu() {
    var ngay = $("#ngaychungtu").val();
    taosochungtu(ngay);
};
function taosochungtu(ngay) {
    debugger
    var data = JSON.stringify({
        Id: ngay
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCollectMoney/Get_Data_PhieuThu",
        data: data,
        success: function (result) {
            $("#sochungtu_thu").val(result);
        },
        error: function () {
            alert("Error!");
        }
    });
};





//active button delete
$("html").on('click', ".activecheckedit", function () {
    $("#edit_phieuthu").removeClass("disabled");
    $("#delete_phieuthu").removeClass("disabled");
});
$("html").on('click', "#delete_room", function () {
    $("#delete_phieuthu").addClass("disabled");
    $("#edit_phieuthu").addClass("disabled");
});




//Xem chi tiet so quy
//function Chitiet_thu(id) {
//    $("#modal_thutien").modal("show");
//    $("#nguoinop").html("");
//    var data = JSON.stringify({
//        Id: id
//    });
//    $.ajax({
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        type: 'POST',
//        url: "/Admin/AdminCollectMoney/Get_Data_PhieuThu",
//        data: data,
//        success: function (result) {
//            $("#sochungtu_thu").val(result);
//        },
//        error: function () {
//            alert("Error!");
//        }
//    });
//}

