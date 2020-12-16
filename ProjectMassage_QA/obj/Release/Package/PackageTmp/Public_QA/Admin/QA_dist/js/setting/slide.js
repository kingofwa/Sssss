
$("html").on("click", "#Modal_slide", function () {
    $("#Modal_slides").modal("show");
    $("#Id_slide").val(0);
    $("#QA_admin_Modal_work_form_slide")[0].reset();
    $("#show_image_slide").html('');
});

$("html").on("click", "#Save_slide", function () {
    var Name = $("#Sli_Name").val();
    var Content = $("#Sli_Content").val();
    var Image = $("#Sli_Image").val();
    var id = $("#Id_slide").val();
    //khai báo mảng slide chứa các thông tin chuyển thành json
    var slide = [];
    slide.length = 0;
    slide.push({
        Id: parseInt(id),
        Sli_Name: Name,
        Sli_Content: Content,
        Sli_Image: Image,
    })
    // chuyển mảng thành chuỗi json
    var data = JSON.stringify({
        slide: slide
    })
    //Khai báo Ajax gọi đến hàm Save_Slide
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminSlide/Save_Slide",
        data: data,
        success: function (result) {
            debugger
            if (result > 0) {
                alert("Save success !");
                if (parseInt(id) == 0) {
                    debugger
                    var showbody = $("#show-body");
                    var Data = '<div id="row_' + result + '" class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">' +
                               '<div class="card bg-light">'+
                               '<div class="card-header text-muted border-bottom-0" id="name_' + result + '" >' + Name + '</div>' +
                               '<div class="card-body pt-0 row">'+
                               '<div class="col-6"><p id="content_' + result + '">+ ' + Content + '</p></div>' +
                               '<div class="col-6 text-center" id="del_imgae_' + result + '"><img src="' + Image + '" alt="QA_slide" class="img-fluid"></div>' +
                               '</div>'+
                               '<div class="card-room">'+
                               '<div class="text-right ">'+
                               '<a id="color_status_@item.Id" class="btn btn-xs btn-success" onclick="Slide(' + result + ')"> Kích hoạt </a>' +
                               '<a class="btn btn-xs btn-warning text-white" onclick="edit_slide(' + result + ')"><i class="fas fa-user-edit mr-1"></i> Sữa</a>' +
                               '<a class="btn btn-xs btn-danger text-white " onclick="delete_slide(' + result + ')"><i class="fas fa-trash-alt mr-1"></i> Xóa</a>' +
                               '</div>'+
                               '</div>'+
                               '</div>'+
                               '</div>';
                    $("#Modal_slides").modal("hide");
                    showbody.append(Data);
                } else {
                    debugger
                    $("#name_"+ id).html(Name);
                    $("#content_"+ id).html(Content);
                    $("#del_imgae_" + id).html("");
                    $("#del_imgae_" + id).html('<img src="' + Image + '"alt="QA_slide" class="img-fluid">');
                    $("#Modal_slides").modal("hide");
                }
            } else {
                alert("Save Loser !");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
})
//Status
function Slide(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminSlide/Save_Status",
        data: data,
        success: function (result) {
            if (result == true) {
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
//Delete
function delete_slide(id) {
    var data = JSON.stringify({
        Id: id
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminSlide/DeleteSlide",
        data: data,
        success: function (result) {
            if (result == true) {
                alert("Bạn xoa thành công");
                $("#row_" + id).remove();
            } else {
                alert("Bạn bị lổi");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
};

//Edit
function edit_slide(id) {
    debugger
    var data = JSON.stringify({
        Id: id
    });
    $("#QA_admin_Modal_work_form_slide")[0].reset();
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminSlide/Edit_Slide",
        data: data,
        success: function (result) {
            debugger
            $("#Sli_Name").val(result.SLi_Name);
            $("#Sli_Content").val(result.SLi_Content);
            $("#Sli_Image").val(result.SLi_Image);
            $("#Id_slide").val(id);
            $("#Modal_slides").modal("show");
            $("#show_image_slide").html('<img src="' + result.SLi_Image + '"alt="QA_slide" class="img-fluid">');
        },
        error: function () {
            alert("Error!");
        }
    });
}


// lưu lấy đường dẫn ảnh (show ảnh)
function SetFileField(fileUrl) {
    var Data_Set = $("#show_image_slide").html("");
    var Data = "<img src='" + fileUrl + "' style='width:80px;height:80px;'>";
    Data_Set.append(Data);
    document.getElementById('Sli_Image').value = fileUrl;
}