$("html").on("click", "#Modal_thongbao", function () {
    $("#Modal_notification").modal("show");
    $("#QA_admin_Modal_work_form_noti")[0].reset();
});

$("html").on("click", "#Save_nofication", function () {
    debugger
    var id_noti = $("#Id_notification").val();
    var content_noti = $("#nofication_Content").val();
    var notification = [];
    notification.length = 0;
    notification.push({
        Id: id_noti,
        N_Content: content_noti
    })
    var data = JSON.stringify({
        arr: notification
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminNotification/Save_Notification",
        data: data,
        success: function (result) {
            if (result.sussecc == true) {
                if (id_noti == 0) {
                    var showbody = $("#show-body-noti");
                    var Data = "<tr id='row_" + result.Id + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                                "<td id='N_Content_" + result.Id + "'>" + content_noti + "</td>" +
                                "<td id='N_Show_" + result.Id + "'><a id='color_status_" + result.Id + "' class='btn btn-xs btn-success' onclick='Noti_lepvc(" + result.Id + ")'> Kích hoạt </a></td>" +
                                "<td id='Note_" + result.Id + "'>" + + "</td>" +
                                "</tr>";
                    showbody.append(Data);
                    $("#Modal_notification").modal("hide");
                } else {
                    $("#N_Content_" + id_noti).html(content_noti);
                    $("#N_Show_" + id_noti).html("<a id='color_status_" + result + "' class='btn btn-xs btn-success' onclick='Noti_lepvc(" + id_noti + ")'>Kích hoạt</a>");
                    $("#Note_" + id_noti).html();
                    $("#Modal_notification").modal("hide");
                }
            } else {
                alert("that bai");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
}); 

//edit
$("html").on("click", "#edit_thongbao", function () {
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
        url: "/Admin/AdminNotification/Edit_Noti",
        data: data,
        success: function (result) {
            $("#nofication_Content").val(result.N_Content);
            $("#Id_notification").val(id);
            $("#Modal_notification").modal("show");
        },
        error: function () {
            alert("Error!");
        }
    });

});

function Noti_lepvc(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminNotification/Save_Status",
        data: data,
        success: function (result) {
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
$("html").on("click", "#delete_thongbao", function () {
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
        url: "/Admin/AdminNotification/Delete_Noti",
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

//active button edit-delete
$("html").on('click', ".activecheckedit", function () {
    $("#edit_thongbao").removeClass("disabled");
    $("#delete_thongbao").removeClass("disabled");
});
$("html").on('click', "#delete_room", function () {
    $("#delete_thongbao").addClass("disabled");
    $("#edit_thongbao").addClass("disabled");
})
