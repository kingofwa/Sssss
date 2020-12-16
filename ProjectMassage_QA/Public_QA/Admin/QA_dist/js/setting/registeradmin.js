$("html").on("click", "#Save_Register", function () {
    debugger
    var Dangkycongty = $("#Dangkycongty").val();
    var tencongtychuthuong = $("#tencongtychuthuong").val();
    var Diachi = $("#Diachi").val();
    var TenGiamdocky = $("#TenGiamdocky").val();
    var Tenketoantruong = $("#Tenketoantruong").val();
    var Tenthuquy = $("#Tenthuquy").val();
    var Masothue = $("#Masothue").val();
    var Thu_Kho = $("#Thu_Kho").val();
    var Dienthoai = $("#Dienthoai").val();
    var Sotaikhoan = $("#Sotaikhoan").val();
    var Logo = $("#Logo").val();
    var Tainganhang = $("#Tainganhang").val();
    var SoFax = $("#SoFax").val();
    var NamTaichinh = $("#NamTaichinh").val();
    var Songaythuno = $("#Songaythuno").val();
    var Motanganhnghe = $("#Motanganhnghe").val();
    var TenTiengAnh = $("#TenTiengAnh").val();
    var Ngayhoachtoan = $("#Ngayhoachtoan").val();
    var Ngaykethuchoachtoan = $("#Ngaykethuchoachtoan").val();
    var Diachi_VanPhong = $("#Diachi_VanPhong").val();
    var Muc_dong_BH = $("#Muc_dong_BH").val();
    var DK_Open = $("#DK_Open").val();
    var DK_Close = $("#DK_Close").val();
    var Ngay_Cong = $("#Ngay_Cong").val();
    var Lam_CN = $("#Lam_CN").val();
    var Thoi_Gian_Check_Int = $("#Thoi_Gian_Check_Int").val();
    var Thoi_Gian_Ca = $("#Thoi_Gian_Ca").val();
    var Chu_y = $("#Chu_y").val();
    var Thong_bao = $("#Thong_bao").val(); 
    var thank_custommer = $("#thank_custommer").val();
    var phuphi = $("#phuphi").val();
    var thuevat = $("#thuevat").val(); 
    var xacnhan = $("#xacnhan").val();
    var update_Register = $("#update_Register").val();
    var register_admin = [];
    register_admin.length = 0;
    register_admin.push({
        Dangkycongty: Dangkycongty,
        tencongtychuthuong: tencongtychuthuong,
        Diachi: Diachi,
        TenGiamdocky: TenGiamdocky,
        Tenketoantruong: Tenketoantruong,
        Tenthuquy: Tenthuquy,
        Masothue: Masothue,
        Thu_Kho: Thu_Kho,
        Dienthoai: Dienthoai,
        Sotaikhoan: Sotaikhoan,
        Logo: Logo,
        Tainganhang: Tainganhang,
        SoFax: SoFax,
        NamTaichinh: NamTaichinh,
        Songaythuno: Songaythuno,
        Motanganhnghe: Motanganhnghe,
        TenTiengAnh: TenTiengAnh,
        Ngayhoachtoan: Ngayhoachtoan,
        Ngaykethuchoachtoan: Ngaykethuchoachtoan,
        Diachi_VanPhong: Diachi_VanPhong,
        Muc_dong_BH: Muc_dong_BH,
        DK_Open: DK_Open,
        DK_Close: DK_Close,
        Ngay_Cong: Ngay_Cong,
        Lam_CN: Lam_CN,
        Thoi_Gian_Check_Int: Thoi_Gian_Check_Int,
        Thoi_Gian_Ca: Thoi_Gian_Ca,
        Chu_y: Chu_y,
        Thong_bao: Thong_bao,
        thank_custommer: thank_custommer,
        phuphi: phuphi,
        xacnhan: xacnhan,
        thuevat: thuevat
    })
    var data = JSON.stringify({
        arr_list_Register: register_admin,
    });
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        url: "/Admin/AdminRegister/Save_Register_Admin",
        data: data,
        success: function (result) {
            if (result) {
                debugger
                toastr.success("Cập nhật thành công !");
            } else {
                toastr.warning("Cập nhật thất bại !");
            }
        },
        error: function () {
            alert("Error!");
        }
    });
});
 
function BrowseServer_Logo() {
    debugger
    var finder = new CKFinder();
    finder.selectActionFunction = lepvc;
    finder.popup();
};

function lepvc(fileUrl) {
    var Data_Set_logo = $("#show_logo").html("");
    var Data = "<img src='" + fileUrl + "'style='width:40px;height:30px;'>";
    Data_Set_logo.append(Data);
    document.getElementById('Logo').value = fileUrl;
};


//$(document).ready(function () {
//    GET_DATA_REGISTER();
//});

//function GET_DATA_REGISTER() {
//    var data = JSON.stringify({
//        Id: 1,
//    });
//    $.ajax({
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        type: 'POST',
//        url: "/Admin/AdminRegister/GETDATA_Register_Admin",
//        data: data,
//        success: function (result) {
//            if (result) {
//                $("#Dangkycongty").val(result.Dangkycongty);
//                $("#tencongtychuthuong").val(result.tencongtychuthuong);
//                $("#Diachi").val(result.Diachi);
//                $("#TenGiamdocky").val(result.TenGiamdocky);
//                $("#Tenketoantruong").val(result.Tenketoantruong);
//                $("#Tenthuquy").val(result.Tenthuquy);
//                $("#Masothue").val(result.Masothue);
//                $("#Thu_Kho").val(result.Thu_Kho);
//                $("#Dienthoai").val(result.Dienthoai);
//                $("#Sotaikhoan").val(result.Sotaikhoan);
//                $("#Logo").val(result.Logo);
//                $("#Tainganhang").val(result.Tainganhang);
//                $("#SoFax").val(result.SoFax);
//                $("#NamTaichinh").val(result.NamTaichinh);
//                $("#Songaythuno").val(result.Songaythuno);
//                $("#Motanganhnghe").val(result.Motanganhnghe);
//                $("#TenTiengAnh").val(result.TenTiengAnh);
//                $("#Ngayhoachtoan").val(result.Ngayhoachtoan);
//                $("#Ngaykethuchoachtoan").val(result.Ngaykethuchoachtoan);
//                $("#Diachi_VanPhong").val(result.Diachi_VanPhong);
//                $("#Muc_dong_BH").val(result.Muc_dong_BH);
//                $("#DK_Open").val(result.DK_Open);
//                $("#DK_Close").val(result.DK_Close);
//                $("#Ngay_Cong").val(result.Ngay_Cong);
//                $("#Lam_CN").val(result.Lam_CN);
//                $("#Thoi_Gian_Check_Int").val(result.Thoi_Gian_Check_Int);
//                $("#Thoi_Gian_Ca").val(result.Thoi_Gian_Ca);
//                $("#Chu_y").val(result.Chu_y);
//                $("#Thong_bao").val(result.Thong_bao);
//            } else {
//                toastr.warning("Cập nhật thất bại !");
//            }
//        },
//        error: function () {
//            alert("Error!");
//        }
//    });
//};