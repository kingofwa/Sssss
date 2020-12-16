
$('html').on('click', "#Modal_typeofwork", function () {
    $("#Modal_type").modal('show');
    $("#Modal_work_form")[0].reset();
    $("#Id_loaica").val(0);
});


$('html').on('click', "#save_typeofwork", function () {
    var id = $("#Id_loaica").val();
    var Name = $("#Name").val();
    var Note = $("#Note").val();
    var FirtTime = $("#FirtTime").val();
    var LastTime = $("#LastTime").val();
    var type = [];
    type.length = 0;
    type.push({
        Id: parseInt(id),
        Name: Name,
        type_note: Note,
        FirtTime: FirtTime,
        LastTime: LastTime
    })
    var data = JSON.stringify({
        type: type
    });

    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminTypeOfWork/Save_type_of_work",
        data: data,
        success: function (result) {
            if (result > 0) {
                toastr.success("Cập nhật thành công !");
                if (parseInt(id)== 0) {
                    var hien_thi = $("#hien_thi");
                    var Data = "<tr id='row_" + result + "'> <td> <input type='radio' name='radiocheck' class='activecheckedit' id='typehide_" + result + "' value='" + result + "' /></td>" +
                                "<td id='Name_" + result + "'>" + Name + "</td>" +
                                "<td  id='FirtTime_" + result + "'>" + FirtTime + "</td>" +
                                "<td  id='LastTime_" + result + "'>" + LastTime + "</td>" +
                                "<td id='Note_" + result + "'>" + Note + "</td>" +
                    "</tr>"; $("#Modal_type").modal("hide");
                    hien_thi.append(Data);
                } else {
                    toastr.success("Cập nhật thành công !");
                    $("#Name_" + id).html(Name);
                    $("#FirtTime_" + id).html(FirtTime);
                    $("#LastTime_" + id).html(LastTime);
                    $("#Modal_type").modal("hide");
                }
            } else {
                toastr.success("Cập nhật bị lổi !");
            }
        },
        error: function () {
            toastr.error("Lỗi hệ thống !!!");
        }
    });
});
    //edit
$("html").on("click", "#Modal_typeofwork_edit", function () {
    debugger
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
        //$("#Modal_work_form")[0].reset();
        $.ajax({
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            type: 'POST',
            url: "/Admin/AdminTypeOfWork/EditType",
            data: data,
            success: function (result) {
              debugger
              var OBJ = JSON.parse(result);
              console.log(OBJ)
                var fg = "";
                $("#Name").val(OBJ[0].Name);
                $("#Note").val(OBJ[0].Note);
                var firttime = moment(OBJ[0].FirtTime).format("HH:mm");
                $("#FirtTime").val(firttime);
                var lasttime = moment(OBJ[0].LastTime).format("HH:mm");
                $("#LastTime").val(lasttime);
                $("#Id_loaica").val(OBJ[0].Id);
                $("#Modal_type").modal("show");
            },
            error: function () {
                toastr.error("Lỗi hệ thống !!!");
            }
        });

    })

    //delete
    $("html").on("click", "#Modal_typeofwork_delete", function () {
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
            url: "/Admin/AdminTypeOfWork/DeleteType",
            data: data,
            success: function (result) {
                if (result.success == 1) {
                    toastr.success(result.thongbaoloi);
                    $("#row_" + id).remove();

                } else {
                    toastr.warning(result.thongbaoloi);
                }
            },
            error: function () {
                alert("Error!");
            }
        });

    })


    //active button edit-delete
    $("html").on('click', ".activecheckedit", function () {
        $("#Modal_typeofwork_edit").removeClass("disabled");
        $("#Modal_typeofwork_delete").removeClass("disabled");
    });
    $("html").on('click', "#Modal_typeofwork_delete", function () {
        $("#Modal_typeofwork_delete").addClass("disabled");
        $("#Modal_typeofwork_edit").addClass("disabled");
    })






    