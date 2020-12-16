

$("html").on("click", "#Modal_workshift", function () {
    $("#Modal_work_shift").modal('show');
})
$("html").on("click", "#Modal_Close_workshift", function () {
    $("#Modal_Close_work_shift").modal('show');
})
$("html").on("click", "#hide_work_shift", function () {
    $("#Modal_Close_work_shift").modal('hide');
})



$('html').on('change', "#tungay", function () {
    serach_shift();
});
$('html').on('change', "#denngay", function () {
    serach_shift();
});

function serach_shift() {
    debugger
    var tungay = $("#tungay").val();
    var dengay = $("#denngay").val();
    var id = tungay + "|" + dengay;
    var SetData = $("#button_search").html("");
    Data = '<a class="btn btn-xs btn-warning ml-3" href="/Admin/AdminWorkShift/WorkShift/' + id + '">Tìm kiếm<i class="fas fa-search ml-2"></i></a>';
    if (tungay != null && tungay != "" && dengay != null && dengay != "") {
        SetData.append(Data);
    }
};


//tim kiem doanh thu ngay
$('html').on('change', "#tungay1", function () {
    serach_shift1();
});
$('html').on('change', "#denngay1", function () {
    serach_shift1();
});

function serach_shift1() {
    debugger
    var tungay1 = $("#tungay1").val();
    var dengay1 = $("#denngay1").val();
    var id = tungay1 + "|" + dengay1;
    var SetData1 = $("#button_search").html("");
    Data1 = '<a class="btn btn-xs btn-warning ml-3" href="/Admin/AdminTurnoverDay/Index/' + id + '">Tìm kiếm<i class="fas fa-search ml-2"></i></a>';
    if (tungay1 != null && tungay1 != "" && dengay1 != null && dengay1 != "") {
        SetData1.append(Data1);
    }
}