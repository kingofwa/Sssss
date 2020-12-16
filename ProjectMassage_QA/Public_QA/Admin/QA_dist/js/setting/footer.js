$("html").on("click", "#Modal_footer", function () {
    $("#Modal_footers").modal('show');
    $("#Modal_work_form")[0].reset();
})

//add 
$("html").on("click", "#save_footer", function () {
    debugger
    debugger
    var Name_f = $("#Name_f").val();
    var Diachi_f = $("#Diachi_f").val();
    var Sodienthoai = $("#Sodienthoai").val();
    var Note = $("#Note").val();
    var id = $("#Id_footer").val();
    var footer = [];
    footer.length = 0;
    footer.push({
        Id: parseInt(id),
        Name_f: Name_f,
        Diachi_f: Diachi_f,
        Sodienthoai: Sodienthoai,
        Name_f: Name_f,
        F_Note: Note,
        //push cac truong giong trong DB
    })
    var data = JSON.stringify({
        footer: footer
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminFooter/Save_Footer",
        data: data,
        success: function (result) {
            debugger
            if (result.sussecc > 0) {
                if (parseInt(id) == 0) {
                    toastr.success("Thêm mới thành công !");
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result.Id + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                        "<td id='Name_f_" + result.Id + "'>" + Name_f + "</td>" +
                        "<td id='Diachi_f_" + result.Id + "'>" + Diachi_f + "</td>" +
                        "<td id='Sodienthoai_" + result.Id + "'>" + Sodienthoai + "</td>" +
                        "<td id='F_Active_" + result.Id + "'><a id='color_status_" + result.Id + "' class='btn btn-xs btn-success' onclick='Footer_lepvc(" + result.Id + ")'> Kích hoạt </a></td>" +
                        "<td id='Note_" + result.Id + "'>" + Note + "</td>" +
                        "</tr>";
                    showbody.append(Data);
                    $("#Modal_footers").modal("hide");
                } else {
                    debugger
                    toastr.success("Cập nhật thành công !");
                    $("#Name_f_" + id).html(Name_f);
                    $("#Diachi_f_" + id).html(Diachi_f);
                    $("#Sodienthoai_" + id).html(Sodienthoai);
                    $("#F_Active_" + id).html("<a id='color_status_" + id + "' class='btn btn-xs btn-success' onclick='Footer_lepvc(" + id + ")'>Kích hoạt</a>");
                    $("#Note_" + id).html(Note);
                    $("#Modal_footers").modal("hide");
                }
            } else {
                toastr.warning("Chưa thể lưu !");
            }
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    });
});

//Status
function Footer_lepvc(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminFooter/Save_Status",
        data: data,
        success: function (result) {
            if (result == 1) {
                toastr.success("Khóa thành công !");
                $("#color_status_" + id).html("Khóa")
                $("#color_status_" + id).removeClass("btn-success")
                $("#color_status_" + id).addClass("btn-danger")
            } else {
                toastr.success("Cập nhật thành công !");
                $("#color_status_" + id).html("Kích hoạt")
                $("#color_status_" + id).removeClass("btn-danger")
                $("#color_status_" + id).addClass("btn-success")
            }
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    })
};

//edit
$("html").on("click", "#edit_footer", function () {
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
        url: "/Admin/AdminFooter/Edit_Footer",
        data: data,
        success: function (result) {
            $("#Name_f").val(result.Name_f);
            $("#Diachi_f").val(result.Diachi_f);
            $("#Sodienthoai").val(result.Sodienthoai);
            $("#Note").val(result.F_Note);
            $("#Id_footer").val(id);
            $("#Modal_footers").modal("show");
        },
        error: function () {
            alert("Error!");
        }
    });

});

//delete
$("html").on("click", "#delete_footer", function () {
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
        url: "/Admin/AdminFooter/Delete_Footer",
        data: data,
        success: function (result) {
            if (result == true) {
                toastr.success("Xóa thành công !");
                $("#row_" + id).remove();
            } else {
                toastr.warning("Thất bại !");
            }
        },
        error: function () {
            alert("Error!");
        }
    });

});

//active button edit-delete
$("html").on('click', ".activecheckedit", function () {
    $("#edit_footer").removeClass("disabled");
    $("#delete_footer").removeClass("disabled");
});
$("html").on('click', "#delete_footer", function () {
    $("#delete_footer").addClass("disabled");
    $("#edit_footer").addClass("disabled");
})