$("html").on("click", "#close_modal_evaluate", function () {
    $("#evaluate").modal("hide");
    Showbutton() + OpacityBlock();
    $(".modal-backdrop.in").css("opacity", "0.1");
    $(".modal-backdrop.in").css("position", "relative");
});
$("html").on("click", "#searchCodeOder", function () {
    $("#evaluate_star").modal("show");
    $(".modal-backdrop.in").css("opacity", ".5");
    var list_employee = $("#codeOder").val();
    var data = JSON.stringify({
        ODERNUMBER: list_employee
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Home/GetData_EmployeeStaff",
        data: data,
        success: function (result) {
            var OBJ = JSON.parse(result);
            if (OBJ.length > 0) {
                debugger
                for (var i = 0; i < OBJ.length; i++) {
                    var Ranting = $("#show-data-employeestaff");
                    var DataRanting =
                        '<tr>' +
                            '<td>' + OBJ[i].E_Name + ' </td>' +
                            '<td><img src="' + OBJ[i].E_Image + '" style="width:30px;height:40px;" alt="" /></td>' +
                            '<td>' +
                                '<input type="hidden" id="an_' + OBJ[i].EmployeeId + '" value="1">' +
                                '<input type="hidden" id="star_total_' + OBJ[i].EmployeeId + '" value="0">' +
                                '<input type="hidden" class="EmployeeIdHIDE" value="' + OBJ[i].EmployeeId + '">' +
                                '<i id="star_' + OBJ[i].EmployeeId + '1" class="fa fa-star-o" data-id="' + OBJ[i].EmployeeId + '" data-dismiss="1"></i>' +
                                '<i id="star_' + OBJ[i].EmployeeId + '2" class="fa fa-star-o" data-id="' + OBJ[i].EmployeeId + '" data-dismiss="2"></i>' +
                                '<i id="star_' + OBJ[i].EmployeeId + '3" class="fa fa-star-o" data-id="' + OBJ[i].EmployeeId + '" data-dismiss="3"></i>' +
                                '<i id="star_' + OBJ[i].EmployeeId + '4" class="fa fa-star-o" data-id="' + OBJ[i].EmployeeId + '" data-dismiss="4"></i>' +
                                '<i id="star_' + OBJ[i].EmployeeId + '5" class="fa fa-star-o" data-id="' + OBJ[i].EmployeeId + '" data-dismiss="5"></i>' +
                            '</td>' +
                        '</tr>';
                Ranting.append(DataRanting);
                }
                $("#oder_ID").val(OBJ[0].OrderId);
                $("#searchCodeOder").css("pointer-events", "none");
                $("#show-data-employeestaff1").html("");
                $(".none").css("display", "block");
                $("#top_none").css("display", "revert");
            } else {
            //$("#show-data-employeestaff1").html("");
            //var Ranting = $("#show-data-employeestaff1");
            //var DataRanting =
            //    '<tr>' +
            //        '<td collapse="3">Mã Oder chưa chính xác <b>!</b></td>';
            //    '</tr>';
            //    Ranting.append(DataRanting);
                $(".none").css("display", "none");
                $("#top_none").css("display", "none");
                toastr.warning("Mã Oder chưa chính xác !");
            } 
        },
        error: function () {
            alert("error")
        }
    });
})

function Add_data_evalute() {
    var Oder = $("#oder_ID").val();
    var EmID = "";
    var EmployeeIdHIDE = document.getElementsByClassName("EmployeeIdHIDE");
    var note = $("#note_evalute").val();
    var list_star = "";
    var aray_select_evalute = [];
    aray_select_evalute.length = 0;
    for (var i = 0; i < EmployeeIdHIDE.length; i++) {
        aray_select_evalute.push({
            OrderId: Oder,
            EmployeeId: EmployeeIdHIDE[i].value,
            SO_NumberStar: $("#star_total_" + EmployeeIdHIDE[i].value).val(),
            Note: note
        });
    }
    var data = JSON.stringify({
        Evalute: aray_select_evalute,
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Ranting/Save_Evalute",
        data: data,
        success: function (result) {
            if (result = true) {
                $("#evaluate_star").modal("hide");
                $("#evaluate").modal("hide");
            } else {
                alert("Loser")
            }
        },
        error: function () {
            alert("error")
        }
    });
}

                                        
                                        
                                            
                                            
                                            
                                           
                                           
                                           
                                       