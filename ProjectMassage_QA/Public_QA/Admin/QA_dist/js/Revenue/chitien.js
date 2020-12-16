$("html").on("click", "#Modal_chitien", function () {
    $("#modal_chitien").modal("show");
    $("#Modal_work_form")[0].reset();
    $("#nguoinhan").html("");
    $("#id_phieuchi").val(0);

    $("#sochungtu_chi").val("");
    var ngay2 = $("#ngaychungtuchi").val();
    debugger
    taosochungtuchi(ngay2);
});

//add 
$("html").on("click", "#save_phieuchi", function () {
    var nguoinhan = $("#nguoinhan").val();
    if (nguoinhan == "") {
        toastr.warning("Người nhận không được để trống !");
    } else {
    var sodienthoai = $("#sodienthoai").val();
    var diachi = $("#diachi").val();   
    var sotien_chi = $("#sotien").val();
    var noidungchi = $("#noidungchi").val();
    var Note_chi = $("#Note_chi").val();
    var chuky_nguoinhan = $("#chuky_nguoinhan").html();
    var nguoilap = $("#nguoilap").html();
    var sochungtu_chi = $("#sochungtu_chi").val();
    var ngaychungtuchi = $("#ngaychungtuchi").val();
    var id = $("#id_phieuchi").val();
    var phieuchi = [];
    phieuchi.length = 0;
    phieuchi.push({
        Id: id,
        nguoinhan: nguoinhan,
        sodienthoai: sodienthoai,
        diachi: diachi,
        sotien_chi: sotien_chi,
        noidungchi: noidungchi,
        Note_chi: Note_chi,
        chuky_nguoinhan: chuky_nguoinhan,
        sochungtu_chi: sochungtu_chi,
        ngaylap: ngaychungtuchi,
        nguoilap: nguoilap,
    })
    var data = JSON.stringify({
        arr_phieuchi: phieuchi
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminPayMoney/Save",
        data: data,
        success: function (result) {
            if (result.sussecc == true) {
                toastr.success("Hoàn thành chi tiền !");
                if (id == 0) {
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result.Id + "'>" +
                                "<td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                                "<td id='sochungtu_chi_" + result.Id + "'>" + sochungtu_chi + " </td>" +
                                "<td id='nguoinhan_" + result.Id + "'>" + nguoinhan + "</td>" +
                                "<td id='nguoilap_" + result.Id + "'>" + nguoilap + "</td>" +
                                "<td class='text-right' id='sotien_chi_" + result.Id + "'><b class='text-danger'>" + themdauphay(sotien_chi) + "</b></td>" +
                                "<td id='sodienthoai_" + result.Id + "'>" + sodienthoai + "</td>" +
                                "<td id='noidungchi_" + result.Id + "'>" + noidungchi + "</td>" +
                                "<td id='Note_chi_" + result.Id + "'>" + Note_chi + "</td>" +
                                "</tr>";
                    showbody.append(Data);
                    $("#modal_chitien").modal("hide");
                } else {
                    $("#nguoinhan_" + id).html(nguoinhan);
                    $("#nguoilap_" + id).html(nguoilap);
                    $("#sotien_chi_" + id).html("<b class='text-danger text-right'>" + themdauphay(sotien_chi) + "</b>");
                    $("#sodienthoai_" + id).html(sodienthoai);
                    $("#noidungchi_" + id).html(noidungchi);
                    $("#Note_chi_" + id).html(Note_chi);
                    $("#modal_chitien").modal("hide");
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
$("html").on("click", "#edit_phieuchi", function () {
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
        url: "/Admin/AdminPayMoney/Edit",
        data: data,
        success: function (result) {
            $("#nguoinhan").val(result.nguoinhan);
            $("#sodienthoai").val(result.sodienthoai);
            $("#diachi").val(result.diachi);
            $("#sotien").val(result.sotien_chi);
            $("#noidungchi").val(result.noidungchi);
            $("#Note_chi").val(result.Note_chi);
            $("#chuky_nguoinhan").html(result.chuky_nguoinhan);
            $("#nguoilap").html(result.nguoilap);
            $("#id_phieuchi").val(id);
            $("#sochungtu_chi").val(result.sochungtu_chi);
            $("#modal_chitien").modal("show");
        },
        error: function () {
            alert("Error!");
        }
    });

});
//delete
$("html").on("click", "#delete_phieuchi", function () {
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
        url: "/Admin/AdminPayMoney/Delete",
        data: data,
        success: function (result) {
            if (result == true) {
                alert("Bạn xóa thành công");
                $("#row_" + id).remove();
            } else {
                alert("Bạn bị lổi");
            }
        },
        error: function () {
            alert("Error!");
        }
    });

});

function Ngay_chung_tu_chi() {
    var ngay2 = $("#ngaychungtuchi").val();
    taosochungtuchi(ngay2);
};
function taosochungtuchi(ngay2) {
    debugger
    var data = JSON.stringify({
        Id: ngay2
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminPayMoney/Get_Data_PhieuChi",
        data: data,
        success: function (result) {
            $("#sochungtu_chi").val(result);
        },
        error: function () {
            alert("Error!");
        }
    });
};

//function Chitiet_chi(id) {
//    $("#modal_chitien").modal("show");
//    $("#nguoinhan").html("");
//    var data = JSON.stringify({
//        Id: id
//    });
//    $.ajax({
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        type: 'POST',
//        url: "/Admin/AdminPayMoney/Get_Data_PhieuChi",
//        data: data,
//        success: function (result) {
//            $("#sochungtu_chi").val(result);
//        },
//        error: function () {
//            alert("Error!");
//        }
//    });
//}
//active button delete
$("html").on('click', ".activecheckedit", function () {
    $("#edit_phieuchi").removeClass("disabled");
    $("#delete_phieuchi").removeClass("disabled");
});
$("html").on('click', "#delete_room", function () {
    $("#delete_phieuchi").addClass("disabled");
    $("#edit_phieuchi").addClass("disabled");
})

$(document).ready(function () {
    var tongtienchi = 0;
    var sotienchi = document.getElementsByClassName("sotienchi");
    for (var i = 0; i < sotienchi.length; i++) {
        debugger
        tongtienchi += parseFloat(sotienchi[i].value);
    }
    $("#tongchi").html(themdauphay(tongtienchi));
    var tongtienthu = 0;
    var sotienthu = document.getElementsByClassName("sotienthu");
    for (var i = 0; i < sotienthu.length; i++) {
        tongtienthu += parseFloat(sotienthu[i].value);
    }
    $("#tongthu").html(themdauphay(tongtienthu));
    var tongcon = tongtienthu - tongtienchi;
    $("#tongcon").html(themdauphay(tongcon));

    if (tongcon > 0) {
        $("#quyquyquy").html("QUỸ CÒN")
    }
    else if (tongcon < 0) {
        $("#quyquyquy").html("QUỸ ÂM")
    }
});