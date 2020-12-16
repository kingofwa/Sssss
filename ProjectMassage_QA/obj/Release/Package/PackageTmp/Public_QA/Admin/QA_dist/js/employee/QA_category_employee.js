
$("html").on("click", "#Modal_categoryemployee", function () {
    $("#Modal_categoriesEmployee").modal('show');
    $("#Id_categoryemployee").val(0);
    $("#Id_categoryemployee").val(0);
})
//add 
$("html").on("click", "#save_categoryemployee", function () {
    debugger
    var Name = $("#NameCategoryemployee").val();
    var DD = $("#DDCategoryemployee").val();
    var Note = $("#Note").val();
    var id = $("#Id_categoryemployee").val();
    var categoryemployee = [];
    categoryemployee.length = 0;
    categoryemployee.push({
        Id: parseInt(id),
        TE_Name: Name,
        TE_Admin_Staff: DD,
        TE_Note: Note
    })
    var data = JSON.stringify({
        categoryemployee: categoryemployee
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCategoryEmployee/Save_CategoryEmployee",
        data: data,
        success: function (result) {
            if (result > 0) {
                if (DD == 1) {
                    xau = "Được đăng nhập";
                } else {
                    var xau = "Không được đăng nhập";
                }
                //if (DD == 2) {
                //    xau = "Phục vụ";
                //} else
                toastr.success("Thành công !");
                if (parseInt(id) == 0) {
                    debugger
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result + "' value='" + result + "' /></td>" +
                                "<td id='TE_Name_" + result + "'>" + Name + "</td>" +
                                "<td id='TE_Admin_Staff_" + result + "'>" + xau + "</td>" +
                                "<td id='TE_Active_" + result + "'><a id='color_status_" + result + "' class='btn btn-xs btn-success' onclick='categorystatus(" + result + ")'> Kích hoạt </a></td>" +
                                "<td id='TE_Note_" + result + "'>" + Note + "</td>" +
                                "</tr>";
                    $("#Modal_categoriesEmployee").modal("hide");
                    showbody.append(Data);
                } else {
                    debugger
                    toastr.success("Thành công !");
                    $("#TE_Name_" + id).html(Name);
                    $("#TE_Admin_Staff_" + id).html(xau);
                    $("#TE_Active_" + id).html("<a id='color_status_" + id + "' class='btn btn-xs btn-success' onclick='categorystatus(" + id + ")'>Kích hoạt</a>");
                    $("#TE_Note_" + id).html(Note);
                    $("#Modal_categoriesEmployee").modal("hide");
                }
            } else {
                toastr.warning("Thất bại !");
            }
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    });
});


//delete
$("html").on("click", "#delete_categoryemployee", function () {
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
        url: "/Admin/AdminCategoryEmployee/Delete_CategoryEmployee",
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
            toastr.error("Lỗi hệ thống !!!");
        }
    });

})

//edit
$("html").on("click", "#edit_categoryemployee", function () {
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
        url: "/Admin/AdminCategoryEmployee/Edit_CategoryEmployee",
        data: data,
        success: function (result) {

            Name = $("#NameCategoryemployee").val(result.TE_Name);
            DD = $("#DDCategoryemployee").val(result.TE_Admin_Staff);
            Note = $("#Note").val(result.TE_Note);
            id = $("#Id_categoryemployee").val(id);
            $("#Modal_categoriesEmployee").modal("show");
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    });

})

//Status
function categorystatus(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCategoryEmployee/Save_Status",
        data: data,
        success: function (result) {
            if (result == false) {
                toastr.success("Khóa thành công !");
                debugger
                $("#color_status_" + id).html("Khóa")
                $("#color_status_" + id).removeClass("btn-success")
                $("#color_status_" + id).addClass("btn-danger")
            } else {
                debugger
                toastr.success("Kích hoạt thành công !");
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

//active button edit-delete
$("html").on('click', ".activecheckedit", function () {
    $("#edit_categoryemployee").removeClass("disabled");
    $("#delete_categoryemployee").removeClass("disabled");
});
$("html").on('click', "#delete_categoryemployee", function () {
    $("#delete_categoryemployee").addClass("disabled");
    $("#edit_categoryemployee").addClass("disabled");
})
