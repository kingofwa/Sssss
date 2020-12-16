
$("html").on("click", "#Modal_service", function () {
    $("#Modal_services").modal('show');
    $("#Id_service").val(0);
})

//add 
$("html").on("click", "#save_service", function () {
    var Name = $("#NameService").val();
    var Money = $("#MoneyService").val();
    var Note = $("#Note").val();
    var id = $("#Id_service").val();
    var service = [];
    service.length = 0;
    service.push({
        Id: parseInt(id),
        S_Name: Name,
        S_Money: Money,
        S_Note: Note
    })
    var data = JSON.stringify({
        service: service
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminService/Save_Service",
        data: data,
        success: function (result) {
            debugger
            if (result.sussecc > 0) {
                if (parseInt(id) == 0) {
                    toastr.success("Thêm mới thành công !");
                    var showbody = $("#show-body");
                    var Data = "<tr id='row_" + result.Id + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result.Id + "' value='" + result.Id + "' /></td>" +
                                "<td id='S_Name_" + result.Id + "'>" + Name + "</td>" +
                                "<td class='text-right' id='S_Money_" + result.Id + "'><b class='text-danger '>" + themdauphay(Money) + "</b></td>" +
                                "<td id='S_Active_" + result.Id + "'><a id='color_status_" + result.Id + "' class='btn btn-xs btn-success' onclick='service_lepvc(" + result.Id + ")'> Kích hoạt </a></td>" +
                                "<td id='S_Note_" + result.Id + "'>" + Note + "</td>" +
                                "</tr>";
                    $("#Modal_services").modal("hide");
                    showbody.append(Data);
                } else {
                    toastr.success("Cập nhật thành công !");
                    $("#S_Name_" + id).html(Name);
                    $("#S_Money_" + id).html("");
                    $("#S_Money_" + id).append("<b class='text-danger'>" + themdauphay(Money) + "</b>");
                    $("#S_Active_" + id).html("<a id='color_status_" + id + "' class='btn btn-xs btn-success' onclick='service_lepvc(" + id + ")'>Kích hoạt</a>");
                    $("#S_Note_" + id).html(Note);
                    $("#Modal_services").modal("hide");
                }
                    
            } else {
                alert("Save Loser !");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
});

//delete
$("html").on("click", "#delete_service", function () {
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
        url: "/Admin/AdminService/Delete_Service",
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
$("html").on("click", "#edit_service", function () {
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
        url: "/Admin/AdminService/Edit_Service",
        data: data,
        success: function (result) {

            Name = $("#NameService").val(result.S_Name);
            Money = $("#MoneyService").val(result.S_Money);
            Note = $("#Note").val(result.S_Note);
            id = $("#Id_service").val(id);
            $("#Modal_services").modal("show");
        },
        error: function () {
            alert("Error!");
        }
    });

});

//Status
function service_lepvc(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminService/Save_Status",
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
    $("#edit_service").removeClass("disabled");
    $("#delete_service").removeClass("disabled");
});
$("html").on('click', "#delete_service", function () {
    $("#delete_service").addClass("disabled");
    $("#edit_service").addClass("disabled");
})
