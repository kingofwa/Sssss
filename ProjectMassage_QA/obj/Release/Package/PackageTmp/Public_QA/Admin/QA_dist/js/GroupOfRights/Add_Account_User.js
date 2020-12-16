
$("html").on("click", "#Add_uers", function () {
    $("#Modal_add_user").modal('show');
    $("#Id_Uer").val(0);
    $("#Modal_work_form")[0].reset();
})
$("html").on("click", "#save_user", function () {
    debugger
    var id = $("#TypeEmployeeeId").val();
    var name = $("#Name_User").val();
    var email = $("#Email_User").val();
    var pass = $("#Pass_User").val();
    var note = $("#Note").val();
    var User = [];
    User.length = 0;
    User.push({
        Id_User: id,
        Name_User: name,
        Email_User: email,
        Pass_User: pass,
        Note: note
    })
    var data = JSON.stringify({
        User: User
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AccountUser/Save_User",
        data: data,
        success: function (result) {
            if (result != 0) {
                if (parseInt(id) == 0) {
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result.id + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.id + "' value='" + result.id + "' /></td>" +
                                "<td id='U_Name_" + result.id + "'>" + name + "</td>" +
                                 "<td id='U_Email_" + result.id + "'>" + email + "</td>" +
                                "<td id='U_Status_" + result.id + "'><a id='color_status_" + result.id + "' class='btn btn-xs btn-success' onclick='Users(" + result.id + ")'> Kích hoạt </a></td>" +
                                "<td id='Note_" + result.id + "'>" + note + "</td>" +
                                "</tr>";
                    showbody.append(Data);
                    $("#Modal_add_user").modal('hide');
                } else {
                    toastr.success("Cập nhật thành công !");
                    $("#U_Name_" + id).html(name);
                    $("#U_Email_" + id).html(email);
                    $("#U_Status_" + id).html("<a id='color_status_" + id + "' class='btn btn-xs btn-success' onclick='Users(" + id + ")'>Kích hoạt</a>");
                    $("#Note_" + id).html(note);
                    $("#Modal_add_user").modal('hide');
                }
            } else {
                alert("That bai");
            }
        }
    });
});
//Delete_USer
$("html").on("click", "#delete_user", function () {
    var activecheckedit = document.getElementsByClassName("activecheckedit");
    var Id_User = 0;
    for (let j = 0; j < activecheckedit.length; j++) {
        if (activecheckedit[j].checked == true) {
            Id_User = parseInt(activecheckedit[j].value);
        }
    }
    var data = JSON.stringify({
        Id_User: Id_User
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AccountUser/Delete_User",
        data: data,
        success: function (result) {
            if (result == true) {
                alert("Bạn xóa thành công");
                $("#row_" + Id_User).remove();
            } else {
                alert("Bạn bị lổi");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
});
//Edit User
$("html").on("click", "#edit_user", function () {
    debugger
    var activecheckedit = document.getElementsByClassName("activecheckedit");
    var Id_User = 0;
    for (let j = 0; j < activecheckedit.length; j++) {
        if (activecheckedit[j].checked == true) {
            Id_User = parseInt(activecheckedit[j].value);
        }
    }
    var data = JSON.stringify({
        Id_User: Id_User
    });
    $("#Modal_work_form")[0].reset();
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AccountUser/Edit_User/",
        data: data,
        success: function (result) {
            $("#Name_User").val(result.user.Name_User);
            $("#Email_User").val(result.user.Email_User);
            $("#Note").val(result.user.Note);
            $("#Id_User").val(Id_User);
            $("#TypeEmployeeeId").val(result.id);
            $("#Modal_add_user").modal('show');
        },
        error: function () {
            alert("Error!");
        }
    });

})
//Status
function Users(id) {
    debugger
    var data = JSON.stringify({
        Id_User: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AccountUser/Save_Status",
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
    $("#edit_user").removeClass("disabled");
    $("#delete_user").removeClass("disabled");
});
$("html").on('click', "#delete_user", function () {
    $("#delete_user").addClass("disabled");
    $("#edit_user").addClass("disabled");
})