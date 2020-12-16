

function troioi2() {
    $(".show_menu").bind('contextmenu', function (e) {
        debugger
        //alert($(this).data('id'));
        var id = this.id;
        $("#txt_id").val(id);
        var top = e.pageY + 5;
        var left = e.pageX;



        $(".context-menu").toggle(100).css({
            top: top + "px",
            left: left + "px"
        });
        // tắt menu  mặc định
        return false;
    });
    // Ẩn menu 
    $(document).bind('contextmenu click', function () {
        $(".context-menu").hide();
        $("#txt_id").val("");
    });
    // tắt menu  từ menu tùy chỉnh
    $('.context-menu').bind('contextmenu', function () {
        return false;
    });
    // Mục menu  đã nhấp
    $('.context-menu li').click(function () {
        var className = $(this).find("span:nth-child(1)").attr("class");
        //var titleid = $('#txt_id').val();
        //$( "#"+ titleid ).css( "background-color", className );
        $(".context-menu").hide();
    });
};

$(function () {
    $(document).ready(function () {
        $(".show_menu").bind('contextmenu', function (e) {
            var id = $(this).data("inline");
            var id_status = $("#doimau_" + id).val();
            var menu_home = "";
            //if (id_status == 1) {
            //    menu_home =
            //       '<li id="Status_room_home" data-inline="' + $(this).data('inline') + '"><i class="fas fa-random"></i> | <span>CHUYỂN PHÒNG</span></li>' +
            //       '<li onclick="Add_room_home()" ><i class="fa fa-plus"></i> | <span>THÊM PHÒNG</span></li>';
            //}
            //else

            if (id_status == 2) {
                menu_home =
                    '<li id="Status_room_home" data-inline="' + $(this).data('inline') + '"><i class="fas fa-check-circle"></i> | <span>DỌN XONG</span></li>' +
                    '<li id="Reload_page"><i class="fas fa-recycle"></i> | <span>TẢI LẠI</span></li>' +
                    '<li onclick="Add_room_home()" ><i class="fa fa-plus"></i> | <span>THÊM PHÒNG</span></li>' +
                    '<li id="show_work"><i class="fab fa-accusoft fa-xs"></i> | <span>ĐÓNG CA</span></li>' +
                    '<li onclick="Show_history()"><i class="fas fa-history fa-sm"></i> | <span>NHẬT KÝ</span></li>' +
                    '<li onclick="Show_giaodien()"><i class="fas fa-braille fa-xs"></i> | <span>CÀI ĐẶT THEME</span></li>';
            } else {
                menu_home =
                     '<li onclick="Show_Modal_OderDetailsShow()"><i class="fas fa-chess-king"></i> | <span>CHECK IN</span></li>' +
                     '<li id="Reload_page"><i class="fas fa-recycle"></i> | <span>TẢI LẠI</span></li>' +
                     '<li onclick="PhongBan()"><i class="fas fa-random"></i> | <span>PHÒNG BẬN</span></li>' +
                     '<li id="show_work"><i class="fab fa-accusoft fa-xs"></i> | <span>ĐÓNG CA</span></li>' +
                     '<li onclick="Add_room_home()"><i class="fa fa-plus"></i> | <span>THÊM PHÒNG</span></li>' +
                     '<li id="Del_room_home"><i class="fas fa-trash-alt"></i> | <span>XÓA PHÒNG</span></li>' +
                     '<li onclick="Show_history()"><i class="fas fa-history fa-sm"></i> | <span>NHẬT KÝ</span></li>' +
                     '<li onclick="Show_giaodien()"><i class="fas fa-braille fa-xs"></i> | <span>CÀI ĐẶT THEME</span></li>';
            }
            var SetData = $("#menu_home").html("");
            SetData.append(menu_home);
            var id = this.id;
            $("#txt_id").val(id);
            var top = e.pageY + 5;
            var left = e.pageX;
            $(".context-menu").toggle(100).css({
                top: top + "px",
                left: left + "px"
            });
            // tắt menu  mặc định
            return false;
        });
        // Ẩn menu 
        $(document).bind('contextmenu click', function () {
            $(".context-menu").hide();
            $("#txt_id").val("");
        });
        // tắt menu  từ menu tùy chỉnh
        $('.context-menu').bind('contextmenu', function () {
            return false;
        });
        // Mục menu  đã nhấp
        $('.context-menu li').click(function () {
            var className = $(this).find("span:nth-child(1)").attr("class");
            //var titleid = $('#txt_id').val();
            //$( "#"+ titleid ).css( "background-color", className );
            $(".context-menu").hide();
        });
    })
});


//$(function () {
//    $("html").on("click", ".show_menu", function () {
//        $(".show_menu").bind('contextmenu', function (e) {
//            var id = this.id;
//            $("#txt_id").val(id);
//            var top = e.pageY + 5;
//            var left = e.pageX;
//            $(".context-menu").toggle(100).css({
//                top: top + "px",
//                left: left + "px"
//            });
//            return false;
//        });
//        $("html").bind('contextmenu click', function () {
//            $(".context-menu").hide();
//            $("#txt_id").val("");
//        });
//        // tắt menu  từ menu tùy chỉnh
//        $('.context-menu').bind('contextmenu', function () {
//            return false;
//        });
//        // Mục menu  đã nhấp
//        $('.context-menu li').click(function () {
//            var className = $(this).find("span:nth-child(1)").attr("class");
//            //var titleid = $('#txt_id').val();
//            //$( "#"+ titleid ).css( "background-color", className );
//            $(".context-menu").hide();
//        });

//    })


//})

