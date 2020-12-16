

$("html").on("click", "#Modal_room", function () {
    $("#Modal_rooms").modal('show');
    $("#Id_room").val(0);
    $("#Modal_work_form")[0].reset();
})

//add 
$("html").on("click", "#save_room", function () {
    debugger
    var R_Name = $("#R_Name").val();
    var CategoryId = $("#CategoryId").val();
    var Note = $("#Note").val();
    var id = $("#Id_room").val();
    var room = [];
    room.length = 0;
    room.push({
        Id: parseInt(id),
        R_Name: R_Name,
        CategoryId: CategoryId,
        R_Note: Note,
 //push cac truong giong trong DB
    })
    var data = JSON.stringify({
        room: room
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminRoom/Save_Room",
        data: data,
        success: function (result) {
            debugger
            if (result.sussecc > 0) {
                if (parseInt(id) == 0) {
                    toastr.success("Thêm mới thành công !");
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result.Id + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                                "<td id='R_Name_" + result.Id + "'>" + R_Name + "</td>" +
                                "<td id='R_Active_" + result.Id + "'><a id='color_status_" + result.Id + "' class='btn btn-xs btn-success' onclick='Room_lepvc(" + result.Id + ")'> Kích hoạt </a></td>" +
                                "<td id='Note_" + result.Id + "'>" + Note + "</td>" +
                                "</tr>";
                    showbody.append(Data);
                    var showbodyy = $("#show_room_home");
                    var Data =
                        '<div id="room_delete_' + result.Id + '" class="col-md-2 Drag_Cart StatusEmployeeAdmin" data-target="' + result.Id + '"  data-status="' + 0 + '" data-id="' + result.Id + '"style="padding-left:2px; padding-right:2px;">' +
                            '<a data-id="" class="show_menu">' +
                                '<input type="hidden" class="OderRoomAdmin" data-role="' + result.Id + '" value="' + result.Id + '" />' +
                                '<input type="hidden" class="OderRoomAdmin2" id="getroom_' + result.Id + '" data-id="' + result.Id + '" data-name="' + R_Name + '" value="0" />' +
                                    '<div class="card dangtrong" id="card-QA_Status_' + result.Id + '"style="border-radius: 0; margin-bottom: 4px;">' +
                                        '<div class="card-body p-3">' +
                                            '<h6 class="card-text text-xs">Phòng | ' + R_Name + ' </h6>' +
                                            '<p class="card-text text-xs">ONLINE</p>' +
                                            '<div class="icon position-absolute">' +
                                                '<i class="fas fa-hot-tub"></i>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                            '</a>' +
                        '</div>';
                    $("#Modal_rooms").modal("hide");
                    showbodyy.append(Data);
                    troioi2();
                } else {
                    debugger
                    toastr.success("Cập nhật thành công !");
                    $("#R_Name_" + id).html(R_Name);
                    //$("#CategoryId_" + id).html(CategoryId);
                    $("#R_Active_" + id).html("<a id='color_status_" + id + "' class='btn btn-xs btn-success' onclick='Room_lepvc(" + id + ")'>Kích hoạt</a>");
                    $("#Note_" + id).html(Note);
                    $("#Modal_rooms").modal("hide");
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

//delete
$("html").on("click", "#delete_room", function () {
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
        url: "/Admin/AdminRoom/Delete_Room",
        data: data,
        success: function (result) {
            if (result == true) {
                toastr.success("Cập nhật thành công !");
                $("#row_" + id).remove();
                troioi2();
            } else {
                toastr.warning("Chưa thể xóa !");
            }
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    });

})

//edit
$("html").on("click", "#edit_room", function () {
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
        url: "/Admin/AdminRoom/Edit_Room/" + id,

        success: function (result) {
            var obj = JSON.parse(result)
            $("#R_Name").val(obj[0].R_Name);
            //$("#CategoryId").val(obj[0].CategoryId);
            $("#Note").val(obj[0].R_Note);
            id = $("#Id_room").val(id);
            $("#Modal_rooms").modal("show");
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    });
});

//Status
function Room_lepvc(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminRoom/Save_Status",
        data: data,
        success: function (result) {
            if (result == false) {
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

//active button edit-delete
$("html").on('click', ".activecheckedit", function () {
    $("#edit_room").removeClass("disabled");
    $("#delete_room").removeClass("disabled");
});
$("html").on('click', "#delete_room", function () {
    $("#delete_room").addClass("disabled");
    $("#edit_room").addClass("disabled");
})
