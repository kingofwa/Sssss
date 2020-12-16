$("html").on("click", "#Modal_discountssss", function () {
    $("#Modal_discount").modal("show");
    $("#QA_admin_Modal_work_form_noti")[0].reset();
});

$("html").on("click", "#Save_discount", function () {
    debugger
    var Id_discount = $("#Id_discount").val();
    var Name_discount = $("#Name_discount").val();
    var Discount_code_view = $("#Discount_code").val();
    var sale_code = $("#sale_code").val();
    var Note = $("#Note").val();
    var discount = [];
    discount.length = 0;
    discount.push({
        Id: Id_discount,
        Name_discount: Name_discount,
        Discount_code_view: Discount_code_view,
        sale_code: sale_code,
        Note: Note,
    })
    var data = JSON.stringify({
        arr: discount
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminDiscount/Save_Discount",
        data: data,
        success: function (result) {
            if (result.sussecc == true) {
                if (Id_discount == 0) {
                    toastr.success("Thêm mới thành công !");
                    var showbody = $("#show-body-discount");
                    var Data = "<tr id='row_" + result.Id + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                                "<td id='Name_discount_" + result.Id + "'>" + Name_discount + "</td>" +
                                "<td id='Discount_code_view_" + result.Id + "'>" + Discount_code_view + "</td>" +
                                "<td id='sale_code_" + result.Id + "'>" + sale_code + "</td>" +
                                "<td id='status_" + result.Id + "'><a id='color_status_" + result.Id + "' class='btn btn-xs btn-success' onclick='Discount_lepvc(" + result.Id + ")'> Kích hoạt </a></td>" +
                                "<td id='Note_" + result.Id + "'>" + Note + "</td>" +
                                "</tr>";
                    showbody.append(Data);
                    $("#Modal_discount").modal("hide");
                } else {
                    toastr.success("Edit thành công !");
                    $("#Name_discount_" + Id_discount).html(Name_discount);
                    $("#Discount_code_view_" + Id_discount).html(Discount_code_view);
                    $("#sale_code_" + Id_discount).html(Sale_code);
                    $("#status_" + Id_discount).html("<a id='color_status_" + result + "' class='btn btn-xs btn-success' onclick='Discount_lepvc(" + id_noti + ")'>Kích hoạt</a>");
                    $("#Note_" + Id_discount).html(Note);
                    $("#Modal_discount").modal("hide");
                }
            } else {
                toastr.warning("Thất bại !");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
});

//edit
$("html").on("click", "#edit_discount", function () {
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
    $("#QA_admin_Modal_work_form_noti")[0].reset();
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminDiscount/Edit_Discount",
        data: data,
        success: function (result) {
            $("#Name_discount").val(result.Name_discount);
            $("#Discount_code").val(result.Discount_code_view);
            $("#sale_code").val(result.Sale_code);
            $("#Note").val(result.Note);
            $("#Id_discount").val(id);
            $("#Modal_discount").modal("show");
        },
        error: function () {
            alert("Error!");
        }
    });

});

function Discount_lepvc(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminDiscount/Save_Status",
        data: data,
        success: function (result) {
            toastr.success("Cập nhật thành công !");
            if (result == 1) {
                $("#color_status_" + id).html("Kích hoạt")
                $("#color_status_" + id).removeClass("btn-danger")
                $("#color_status_" + id).addClass("btn-success")
            } else {
                $("#color_status_" + id).html("Khóa")
                $("#color_status_" + id).removeClass("btn-success")
                $("#color_status_" + id).addClass("btn-danger")
            }
        },
        error: function () {
            alert("eurro");
        }
    });
};

//delete
$("html").on("click", "#delete_discount", function () {
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
        url: "/Admin/AdminDiscount/Delete_Discount",
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
    $("#edit_discount").removeClass("disabled");
    $("#delete_discount").removeClass("disabled");
});
