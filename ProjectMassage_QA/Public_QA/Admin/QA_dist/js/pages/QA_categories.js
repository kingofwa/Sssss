//Gọi modal thêm thể loại ,Id_category= 0 -> thêm , Id_category = 1 -> update
$("html").on("click", "#Modal_category", function () {
    $("#Modal_categories").modal('show');
    $("#Id_category").val(0);
})
//add 
$("html").on("click", "#save_category", function () {
    debugger
    var Name = $("#NameCategory").val();
    var Money = $("#MoneyCategory").val();
    var Note = $("#Note").val();
    var id = $("#Id_category").val();
    var category = [];
    category.length = 0;
    category.push({
        Id: parseInt(id),
        C_Name: Name,
        C_Money: Money,
        C_Note: Note
    })
    var data = JSON.stringify({
        category: category
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCategories/Save_Category",
        data: data,
        success: function (result) {
            if (result.sussecc > 0) {
                if (parseInt(id) == 0) {
                    toastr.success("Thêm mới thành công !");
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result.Id + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                                "<td id='C_Name_" + result.Id + "'>" + Name + "</td>" +
                                "<td id='C_Money_" + result.Id + "'><b class='text-danger'>" + themdauphay(Money) + "</b>đ</td>" +
                                "<td id='C_Active_" + result.Id + "'><a id='color_status_" + result.Id + "' class='btn btn-xs btn-success' onclick='troioi(" + result.Id + ")'> Kích hoạt </a></td>" +
                                "<td id='C_Note_" + result.Id + "'>" + Note + "</td>" +
                                "</tr>";
                    $("#Modal_categories").modal("hide");
                    showbody.append(Data);
                } else {
                    toastr.success("Cập nhật thành công !");
                    debugger
                    $("#C_Name_" + id).html(Name);
                    $("#C_Money_" + id).html("");
                    $("#C_Money_" + id).append("<b class='text-danger'>" + themdauphay(Money) + "</b>");
                    $("#C_Active_" + id).html("<a id='color_status_" + id + "' class='btn btn-xs btn-success' onclick='troioi(" +id+ ")'>Kích hoạt</a>");
                    $("#C_Note_" + id).html(Note);
                    $("#Modal_categories").modal("hide");
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

//delete
$("html").on("click", "#delete_category", function () {
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
        url: "/Admin/AdminCategories/Delete_Category",
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

})

//edit
$("html").on("click", "#edit_category", function () {
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
        url: "/Admin/AdminCategories/Edit_Category",
        data: data,
        success: function (result) {

            Name = $("#NameCategory").val(result.C_Name);
            Money = $("#MoneyCategory").val(result.C_Money);
            Note = $("#Note").val(result.C_Note);
            id = $("#Id_category").val(id);
             $("#Modal_categories").modal("show");
        },
        error: function () {
            alert("Error!");
        }
    });

})

//Status
function troioi(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminCategories/Save_Status",
        data: data,
        success: function (result) {
            if (result == false) {
                debugger
                $("#color_status_" + id).html("Khóa")
                $("#color_status_" + id).removeClass("btn-success")
                $("#color_status_" + id).addClass("btn-danger")
            } else {
                debugger
                $("#color_status_" + id).html("Kích hoạt")
                $("#color_status_" + id).removeClass("btn-danger")
                $("#color_status_" + id).addClass("btn-success")
            }
        },
        error: function () {
            alert("eurro");
        }
    })
};

//active button edit-delete
$("html").on('click', ".activecheckedit", function () {
    $("#edit_category").removeClass("disabled");
    $("#delete_category").removeClass("disabled");
});
$("html").on('click', "#delete_category", function () {
    $("#delete_category").addClass("disabled");
    $("#edit_category").addClass("disabled");
})
