USE [Data_Massage]
GO
/****** Object:  Table [dbo].[BDang_Ky]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BDang_Ky](
	[ID_dang_Ky] [int] NOT NULL,
	[Dangkycongty] [nvarchar](500) NULL,
	[tencongtychuthuong] [nvarchar](500) NULL,
	[Diachi] [nvarchar](500) NULL,
	[TenGiamdocky] [int] NULL,
	[Tenketoantruong] [int] NULL,
	[Tenthuquy] [int] NULL,
	[Thu_Kho] [int] NULL,
	[Masothue] [varchar](50) NULL,
	[Dienthoai] [varchar](50) NULL,
	[Sotaikhoan] [varchar](50) NULL,
	[Logo] [nvarchar](250) NULL,
	[Tainganhang] [nvarchar](250) NULL,
	[SoFax] [varchar](50) NULL,
	[NamTaichinh] [int] NULL,
	[Diachi_VanPhong] [nvarchar](250) NULL,
	[Motanganhnghe] [nvarchar](max) NULL,
	[TenTiengAnh] [nvarchar](250) NULL,
	[Songaythuno] [int] NULL,
	[Ngayhoachtoan] [date] NULL,
	[Ngaykethuchoachtoan] [date] NULL,
	[Muc_dong_BH] [int] NULL,
	[Ngay_Cong] [int] NULL,
	[Lam_CN] [nvarchar](50) NULL,
	[DK_Open] [time](7) NULL,
	[DK_Close] [time](7) NULL,
	[Thoi_Gian_Check_Int] [int] NULL,
	[Thoi_Gian_Ca] [int] NULL,
	[Chu_y] [nvarchar](250) NULL,
	[Thong_bao] [nvarchar](250) NULL,
	[thank_custommer] [nvarchar](250) NULL,
	[phuphi] [int] NULL,
	[thuevat] [int] NULL,
	[xacnhan] [nvarchar](200) NULL,
 CONSTRAINT [PK_BDang_Ky] PRIMARY KEY CLUSTERED 
(
	[ID_dang_Ky] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BLich_Su_Vao_Phan_Mem]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BLich_Su_Vao_Phan_Mem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Nhan_su_ID] [int] NULL,
	[Controller] [nvarchar](500) NULL,
	[Action] [nvarchar](500) NULL,
	[Ngay_vao] [datetime] NULL,
 CONSTRAINT [PK_BLich_Su_Vao_Phan_Mem] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BLog_Business_TenQuyen]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BLog_Business_TenQuyen](
	[BusinessId] [varchar](100) NOT NULL,
	[BusinessName] [nvarchar](256) NULL,
 CONSTRAINT [PK_BLog_Business_TenQuyen] PRIMARY KEY CLUSTERED 
(
	[BusinessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BLog_Permission_BCacQuenCT]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BLog_Permission_BCacQuenCT](
	[PermissionId] [int] IDENTITY(1,1) NOT NULL,
	[PermissionName_TenQuyen] [nvarchar](256) NULL,
	[Description] [nvarchar](256) NULL,
	[BusinessId] [varchar](100) NULL,
	[Quyencapcao] [bit] NULL,
 CONSTRAINT [PK_BLog_Permission_BCacQuenCT] PRIMARY KEY CLUSTERED 
(
	[PermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Discount_Code]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Discount_Code](
	[Id] [int] NOT NULL,
	[Name_discount] [nvarchar](250) NULL,
	[Sale_code] [varchar](50) NULL,
	[Discount_code_view] [nvarchar](50) NULL,
	[status] [int] NULL,
	[Note] [nvarchar](250) NULL,
 CONSTRAINT [PK_Discount_Code] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Footer_client]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Footer_client](
	[Id] [int] NOT NULL,
	[Name_f] [nvarchar](250) NULL,
	[Diachi_f] [nvarchar](250) NULL,
	[Sodienthoai] [text] NULL,
	[F_Note] [nvarchar](250) NULL,
	[F_Active] [int] NULL,
 CONSTRAINT [PK_Footer_client] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GrantPermission]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GrantPermission](
	[PermissionId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_GrantPermission] PRIMARY KEY CLUSTERED 
(
	[PermissionId] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[phieu_thu]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[phieu_thu](
	[Id] [int] NOT NULL,
	[nguoinoptien] [nvarchar](150) NULL,
	[sodienthoai] [varchar](50) NULL,
	[diachi] [nvarchar](500) NULL,
	[sotien_thu] [float] NULL,
	[noidungthu] [nvarchar](250) NULL,
	[Note_thu] [nvarchar](250) NULL,
	[nguoinop] [nvarchar](150) NULL,
	[nguoilap] [nvarchar](150) NULL,
	[ngaylap] [date] NULL,
	[sochungtu_thu] [nvarchar](150) NULL,
 CONSTRAINT [PK_phieu_thu] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SettingAdmin]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SettingAdmin](
	[Id] [int] NOT NULL,
	[thoigian] [int] NULL,
	[thoigianca] [int] NULL,
	[fontchu] [nvarchar](100) NULL,
	[cochu] [int] NULL,
	[chuy] [nvarchar](250) NULL,
	[mauonline] [varchar](50) NULL,
	[maucokhach] [varchar](50) NULL,
	[maucho] [varchar](50) NULL,
	[thongbao] [nvarchar](250) NULL,
	[maunhanvienonline] [varchar](50) NULL,
	[maunhanviencokhach] [varchar](50) NULL,
	[colorbar] [varchar](50) NULL,
	[ID_User] [int] NULL,
	[mauchu] [varchar](50) NULL,
	[heightContent] [int] NULL,
	[widthContent] [int] NULL,
	[heightRight] [int] NULL,
	[widthRight] [int] NULL,
	[hienthichuthich] [int] NULL,
 CONSTRAINT [PK_SettingAdmin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_CaLamViec]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_CaLamViec](
	[Id] [int] NOT NULL,
	[LoaiCaLamViecId] [int] NULL,
	[NameEmployee] [nvarchar](100) NULL,
	[FirtTime] [varchar](50) NULL,
	[LastTime] [varchar](50) NULL,
	[Note] [nvarchar](100) NULL,
	[Status] [int] NULL,
	[Id_giao] [int] NULL,
	[Id_nhan] [int] NULL,
	[Tong_tien_thu_trong_ca] [decimal](18, 0) NULL,
	[Tien_ca_truoc_ban_giao] [decimal](18, 0) NULL,
	[Tong_tien_mat] [decimal](18, 0) NULL,
	[Tong_tien_cuoi_ca] [decimal](18, 0) NULL,
	[Ngay] [datetime] NULL,
	[Note_shift] [nvarchar](150) NULL,
 CONSTRAINT [PK_tbl_CaLamViec] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Loai_Ca_Lam_Viec]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Loai_Ca_Lam_Viec](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](100) NULL,
	[FirtTime] [datetime] NULL,
	[LastTime] [datetime] NULL,
	[Note] [nvarchar](100) NULL,
 CONSTRAINT [PK_tbl_Loai_Ca_Lam_Viec] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Phieu_Chi]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Phieu_Chi](
	[Id] [int] NOT NULL,
	[nguoinhan] [nvarchar](50) NULL,
	[sodienthoai] [varchar](50) NULL,
	[diachi] [nvarchar](500) NULL,
	[sotien_chi] [float] NULL,
	[noidungchi] [nvarchar](250) NULL,
	[Note_chi] [nvarchar](100) NULL,
	[chuky_nguoinhan] [nvarchar](50) NULL,
	[nguoilap] [nvarchar](50) NULL,
	[ngaylap] [date] NULL,
	[sochungtu_chi] [varchar](50) NULL,
 CONSTRAINT [PK_tbl_Phieu_Chi] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_User]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_User](
	[Id_User] [int] NOT NULL,
	[Chucvu] [nvarchar](50) NULL,
	[GroupID] [varchar](50) NULL,
	[Name_User] [varchar](50) NULL,
	[Email_User] [varchar](50) NULL,
	[Pass_User] [nvarchar](50) NULL,
	[Note] [varchar](100) NULL,
	[U_Status] [bit] NULL,
	[Dark_Light_theme] [int] NULL,
	[Full_full_screen] [int] NULL,
 CONSTRAINT [PK_tbl_User] PRIMARY KEY CLUSTERED 
(
	[Id_User] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblCategories]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCategories](
	[Id] [int] NOT NULL,
	[C_Name] [nvarchar](250) NULL,
	[C_Active] [bit] NULL,
	[C_Note] [nvarchar](250) NULL,
	[C_Money] [float] NULL,
 CONSTRAINT [PK_tblCategories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblCheckin]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCheckin](
	[Id] [int] NOT NULL,
	[FirtDayCheckin] [date] NULL,
	[FirtHourCheckin] [nvarchar](50) NULL,
	[LastDayCheckin] [date] NULL,
	[LastHourCheckin] [nvarchar](50) NULL,
	[CategoryCheckin] [nchar](10) NULL,
	[ServiceCheckin] [nchar](10) NULL,
	[EmployeeStaffCheckin] [varchar](50) NULL,
	[NoteCheckin] [varchar](100) NULL,
	[ID_RoomCheckin] [varchar](100) NULL,
 CONSTRAINT [PK_tblCheckin_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblColecttion]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblColecttion](
	[Id] [int] NOT NULL,
	[Order_Id] [int] NULL,
	[CL_NewDay] [date] NULL,
	[CL_Number] [nvarchar](50) NULL,
	[CL_NhanSuId] [int] NULL,
	[CL_Active] [bit] NULL,
	[CL_Content] [nvarchar](250) NULL,
	[CL_Note] [nvarchar](50) NULL,
	[CL_Money] [float] NULL,
 CONSTRAINT [PK_tblColecttion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblEmployees]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblEmployees](
	[Id] [int] NOT NULL,
	[E_Code] [nvarchar](50) NULL,
	[TypeEmployeeId] [int] NULL,
	[E_Name] [nvarchar](250) NULL,
	[E_Phone] [nvarchar](50) NULL,
	[E_CMND] [varchar](50) NULL,
	[E_Address] [nvarchar](250) NULL,
	[E_Dayin] [datetime] NULL,
	[E_Dayout] [datetime] NULL,
	[E_Note] [nvarchar](250) NULL,
	[E_Image] [nvarchar](50) NULL,
	[E_Active] [int] NULL,
 CONSTRAINT [PK_tblEmployees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblNotification]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblNotification](
	[Id] [int] NOT NULL,
	[N_Content] [nvarchar](350) NULL,
	[N_Show] [int] NULL,
	[N_Note] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblNotification] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblOrder]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblOrder](
	[Id] [int] NOT NULL,
	[FirtDayCheckin] [date] NULL,
	[FirtHourCheckin] [nvarchar](50) NULL,
	[LastDayCheckin] [date] NULL,
	[LastHourCheckin] [nvarchar](50) NULL,
	[O_number] [nvarchar](550) NULL,
	[NhanVienID] [int] NULL,
	[DayNew] [date] NULL,
	[Note] [varchar](200) NULL,
	[Chay] [int] NULL,
	[Ca_lam_Id] [int] NULL,
	[Id_Code_sale] [int] NULL,
	[phantramgiam] [int] NULL,
 CONSTRAINT [PK_tblOrder] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblOrderDetail]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblOrderDetail](
	[OrderId] [int] NOT NULL,
	[Id_tang] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[Money] [float] NULL,
	[TypeOder] [varchar](10) NULL,
 CONSTRAINT [PK_tblOrderDetail] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC,
	[Id_tang] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblRegister]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRegister](
	[Id] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[UserName] [varchar](50) NULL,
	[Pass] [nvarchar](250) NULL,
	[Active] [bit] NULL,
	[GroupBy] [varchar](50) NULL,
	[Email] [nvarchar](150) NULL,
 CONSTRAINT [PK_tblRegister] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblRoom]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRoom](
	[Id] [int] NOT NULL,
	[CategoryId] [int] NULL,
	[R_Name] [nvarchar](250) NULL,
	[R_Active] [bit] NULL,
	[R_Note] [nvarchar](250) NULL,
	[R_Status] [int] NULL,
 CONSTRAINT [PK_tblRoom] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblSepending]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblSepending](
	[Id] [int] NOT NULL,
	[IdNhan] [int] NULL,
	[S_NewDay] [date] NULL,
	[S_Number] [nvarchar](50) NULL,
	[S_NhanSuId] [int] NULL,
	[S_Active] [bit] NULL,
	[S_Content] [nvarchar](250) NULL,
	[S_Note] [nvarchar](50) NULL,
	[S_Money] [float] NULL,
 CONSTRAINT [PK_tblSepending] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblServicies]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblServicies](
	[Id] [int] NOT NULL,
	[S_Name] [nvarchar](250) NULL,
	[S_Active] [bit] NULL,
	[S_Note] [nvarchar](250) NULL,
	[S_Money] [float] NULL,
 CONSTRAINT [PK_tblServises] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblSlider]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblSlider](
	[Id] [int] NOT NULL,
	[SLi_Image] [nvarchar](250) NULL,
	[SLi_Content] [nvarchar](550) NULL,
	[SLi_Active] [bit] NULL,
	[SLi_Name] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblSlider] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblStaffInEmployee]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblStaffInEmployee](
	[Id] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[E_NumberStar_View1] [int] NULL,
	[E_NumberStar_Admin] [int] NULL,
	[E_Image] [nvarchar](250) NULL,
	[E_ImageList] [nvarchar](550) NULL,
	[E_Details] [text] NULL,
	[E_Money] [float] NULL,
	[E_Status] [int] NULL,
 CONSTRAINT [PK_tblStaffInEmployee_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblStarOrder]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblStarOrder](
	[Id] [int] NOT NULL,
	[OrderId] [int] NOT NULL,
	[EmployeeId] [int] NOT NULL,
	[SO_NumberStar] [int] NULL,
	[Note] [varchar](100) NULL,
 CONSTRAINT [PK_tblStarOrder] PRIMARY KEY CLUSTERED 
(
	[Id] ASC,
	[OrderId] ASC,
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TypeEmployee]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TypeEmployee](
	[Id] [int] NOT NULL,
	[TE_Name] [nvarchar](250) NULL,
	[TE_Active] [bit] NULL,
	[TE_Note] [nvarchar](250) NULL,
	[TE_Admin_Staff] [int] NULL,
 CONSTRAINT [PK_TypeEmployee] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserGroup]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserGroup](
	[ID] [varchar](100) NOT NULL,
	[Name] [nvarchar](100) NULL,
 CONSTRAINT [PK_UserGroup] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tbl_CaLamViec] ADD  CONSTRAINT [DF_tbl_CaLamViec_Status]  DEFAULT ((1)) FOR [Status]
GO
ALTER TABLE [dbo].[tblOrder] ADD  CONSTRAINT [DF_tblOrder_Chay]  DEFAULT ((0)) FOR [Chay]
GO
ALTER TABLE [dbo].[tblRoom] ADD  CONSTRAINT [DF_tblRoom_R_Status]  DEFAULT ((0)) FOR [R_Status]
GO
ALTER TABLE [dbo].[tbl_CaLamViec]  WITH CHECK ADD  CONSTRAINT [FK_tbl_CaLamViec_tbl_Loai_Ca_Lam_Viec] FOREIGN KEY([LoaiCaLamViecId])
REFERENCES [dbo].[tbl_Loai_Ca_Lam_Viec] ([Id])
GO
ALTER TABLE [dbo].[tbl_CaLamViec] CHECK CONSTRAINT [FK_tbl_CaLamViec_tbl_Loai_Ca_Lam_Viec]
GO
ALTER TABLE [dbo].[tblColecttion]  WITH CHECK ADD  CONSTRAINT [FK_tblColecttion_tblOrder] FOREIGN KEY([Order_Id])
REFERENCES [dbo].[tblOrder] ([Id])
GO
ALTER TABLE [dbo].[tblColecttion] CHECK CONSTRAINT [FK_tblColecttion_tblOrder]
GO
ALTER TABLE [dbo].[tblOrderDetail]  WITH CHECK ADD  CONSTRAINT [FK_tblOrderDetail_tblOrder] FOREIGN KEY([OrderId])
REFERENCES [dbo].[tblOrder] ([Id])
GO
ALTER TABLE [dbo].[tblOrderDetail] CHECK CONSTRAINT [FK_tblOrderDetail_tblOrder]
GO
ALTER TABLE [dbo].[tblRegister]  WITH CHECK ADD  CONSTRAINT [FK_tblRegister_tblEmployees] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[tblEmployees] ([Id])
GO
ALTER TABLE [dbo].[tblRegister] CHECK CONSTRAINT [FK_tblRegister_tblEmployees]
GO
ALTER TABLE [dbo].[tblRoom]  WITH CHECK ADD  CONSTRAINT [FK_tblRoom_tblCategories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[tblCategories] ([Id])
GO
ALTER TABLE [dbo].[tblRoom] CHECK CONSTRAINT [FK_tblRoom_tblCategories]
GO
ALTER TABLE [dbo].[tblSepending]  WITH CHECK ADD  CONSTRAINT [FK_tblSepending_tblEmployees] FOREIGN KEY([IdNhan])
REFERENCES [dbo].[tblEmployees] ([Id])
GO
ALTER TABLE [dbo].[tblSepending] CHECK CONSTRAINT [FK_tblSepending_tblEmployees]
GO
ALTER TABLE [dbo].[tblStaffInEmployee]  WITH CHECK ADD  CONSTRAINT [FK_tblStaffInEmployee_tblEmployees] FOREIGN KEY([EmployeeId])
REFERENCES [dbo].[tblEmployees] ([Id])
GO
ALTER TABLE [dbo].[tblStaffInEmployee] CHECK CONSTRAINT [FK_tblStaffInEmployee_tblEmployees]
GO
ALTER TABLE [dbo].[tblStarOrder]  WITH CHECK ADD  CONSTRAINT [FK_tblStarOrder_tblOrder] FOREIGN KEY([OrderId])
REFERENCES [dbo].[tblOrder] ([Id])
GO
ALTER TABLE [dbo].[tblStarOrder] CHECK CONSTRAINT [FK_tblStarOrder_tblOrder]
GO
/****** Object:  StoredProcedure [dbo].[Bill]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
 CREATE PROC [dbo].[Bill]
as
select r.Id,Sum(b.Money) as Total,r.FirtDayCheckin,r.FirtHourCheckin,r.LastDayCheckin,r.LastHourCheckin,r.NhanVienID,b1.E_Name,r.O_number,r.Note ,r.phantramgiam
from tblOrder as r, tblOrderDetail as b,tblEmployees as b1
where r.Id=b.OrderId and r.Chay=1 and b1.Id=r.NhanVienID 
group by r.Id,r.FirtDayCheckin,r.FirtHourCheckin,r.LastDayCheckin,r.LastHourCheckin,r.NhanVienID,b1.E_Name,r.O_number,r.Note,r.phantramgiam
GO
/****** Object:  StoredProcedure [dbo].[Bill_Chiitet]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Bill_Chiitet]
as
select r.Id, b.Money,b.TypeOder, b.EmployeeId 
from tblOrder as r, tblOrderDetail as b
where r.Id=b.OrderId and r.Chay > 0
group by r.Id, b.Money,b.TypeOder, b.EmployeeId
GO
/****** Object:  StoredProcedure [dbo].[Close_shift]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Close_shift]
as
select r.Id,Sum(b.Money) as Total , r.Ca_lam_Id
from tblOrder as r, tblOrderDetail as b
where r.Id=b.OrderId
group by  r.Id, r.Ca_lam_Id
GO
/****** Object:  StoredProcedure [dbo].[DOANH_THU_CA]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[DOANH_THU_CA]
as
select  l.Name,ca.FirtTime,ca.LastTime,u.Name_User as nameusergiao,ca.Ngay,ca.Tien_ca_truoc_ban_giao,ca.Note_shift,ca.Tong_tien_cuoi_ca,ca.Tong_tien_mat,ca.Tong_tien_thu_trong_ca,ca.Id_nhan,u2.Name_User
from tbl_CaLamViec as ca, tbl_User as u ,tbl_Loai_Ca_Lam_Viec as l,tbl_User as u2
where ca.LoaiCaLamViecId=l.Id  and ca.Id_giao=u.Id_User and u2.Id_User=ca.Id_nhan
group by l.Name,ca.FirtTime,ca.LastTime,u.Name_User ,ca.Ngay,ca.Tien_ca_truoc_ban_giao,ca.Note_shift,ca.Tong_tien_cuoi_ca,ca.Tong_tien_mat,ca.Tong_tien_thu_trong_ca,ca.Id_nhan,u2.Name_User
GO
/****** Object:  StoredProcedure [dbo].[DOANH_THU_NAM]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[DOANH_THU_NAM]
as
select o.DayNew ,o.O_number, od.TypeOder,od.Money ,od.EmployeeId ,o.Id
from tblOrder as o, tblOrderDetail as od
where o.Id=od.OrderId
group by o.DayNew ,o.O_number, od.TypeOder,od.Money ,od.EmployeeId,o.Id
GO
/****** Object:  StoredProcedure [dbo].[DOANH_THU_NGAY]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[DOANH_THU_NGAY]
as
select r.Id,e.Name_User ,r.DayNew,r.O_number,SUM( b.Money) as total_money 
from tblOrder as r, tblOrderDetail as b ,tbl_User as e
where r.Id=b.OrderId and e.Id_User = r.NhanVienID
group by r.Id,e.Name_User ,r.DayNew,r.O_number
GO
/****** Object:  StoredProcedure [dbo].[Lay_Employee_Type]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create proc [dbo].[Lay_Employee_Type]
as
select * from tblEmployees as a, TypeEmployee as b
where a.TypeEmployeeId=b.Id
GO
/****** Object:  StoredProcedure [dbo].[Lay_rom_hoat_dong]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[Lay_rom_hoat_dong]
as
select od.EmployeeId,o.LastHourCheckin
from tblOrder as o, tblOrderDetail as od
where od.OrderId = o.Id and o.Chay = 1 and od.TypeOder ='Room'
group by  od.EmployeeId,o.LastHourCheckin
GO
/****** Object:  StoredProcedure [dbo].[LEPVC]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[LEPVC]
as
select   a.DayNew,a.NhanVienID,a.O_number,a.EmployeeId,a.Id_tang,a.Money,a.OrderId,a.TypeOder,a.S_Name,a.S_Money,a.Id_service,a.Note ,a.Id ,a.Id_Code_sale,b.Id as Id_sale ,b.Discount_code_view,b.Sale_code
from (select a.DayNew ,a.Id,a.NhanVienID,a.O_number,b.EmployeeId,b.Id_tang,b.Money,b.OrderId,b.TypeOder,d1.C_Name as S_Name,d1.C_Money as S_Money,a.Note,d1.Id as Id_service ,a.Id_Code_sale
from  tblOrder as a, tblOrderDetail as b, tblCategories as d1
where a.Id=b.OrderId and b.EmployeeId=d1.Id and b.TypeOder='categori' and a.Chay=0
group by a.Id,  a.DayNew,a.NhanVienID,a.O_number,b.EmployeeId,b.Id_tang,b.Money,b.OrderId,b.TypeOder,d1.C_Name,d1.C_Money,a.Note,d1.Id,a.Id_Code_sale
) as  a
LEFT JOIN Discount_Code AS B
on a.Id_Code_sale=B.Id
GO
/****** Object:  StoredProcedure [dbo].[map_employee]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[map_employee]
as
select e.E_Active,e.E_Image,e.E_Name,se.E_Money,se.EmployeeId,se.E_Status,e.E_Code
from tblEmployees as e, tblStaffInEmployee as se
where e.Id=se.Id
group by  e.E_Active,e.E_Image,e.E_Name,se.E_Money,se.EmployeeId,se.E_Status,e.E_Code
GO
/****** Object:  StoredProcedure [dbo].[mediumStar]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


 


Create PROC  [dbo].[mediumStar]
as
select AVG( st.SO_NumberStar) as AVG_Employee,z.E_Name,z.E_Code
from  tblEmployees as z,tblStarOrder as st
where  st.EmployeeId=z.Id
group by z.E_Name,z.E_Code
GO
/****** Object:  StoredProcedure [dbo].[mediumStar12]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


 


CREATE PROC  [dbo].[mediumStar12]
as
select count( st.EmployeeId) as aaa,sum( st.SO_NumberStar) as AVG_Employee,z.E_Name,z.E_Code, AVG(st.SO_NumberStar) as star
from  tblEmployees as z,tblStarOrder as st
where  st.EmployeeId=z.Id
group by z.E_Name,z.E_Code
GO
/****** Object:  StoredProcedure [dbo].[NhatKy]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE proc [dbo].[NhatKy]
as
select r.Id,r.O_number ,r.Note,r.phantramgiam,u.Name_User,r.DayNew
from tblOrder as r, tbl_User as u
where r.NhanVienID=u.Id_User
group by r.Id,r.O_number ,r.Note,r.phantramgiam,u.Name_User,r.DayNew
GO
/****** Object:  StoredProcedure [dbo].[NumberOfServings]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create PROC  [dbo].[NumberOfServings]
as
select count(d.EmployeeId) as totalNumber,sum( d.Money) as totalmoney,z.E_Name
from  tblEmployees as z,tblOrderDetail as d
where  z.Id=d.EmployeeId
group by z.E_Name
GO
/****** Object:  StoredProcedure [dbo].[Order_Admin_Categories_0]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Order_Admin_Categories_0]
as
select a.DayNew,a.Id,a.NhanVienID,a.O_number,b.EmployeeId,b.Id_tang,b.Money,b.OrderId,b.TypeOder,d1.S_Name,d1.S_Money,a.Note,d1.Id as Id_service , dis.Discount_code_view,dis.Sale_code
from  tblOrder as a, tblOrderDetail as b, tblServicies as d1,Discount_Code as dis
where a.Id=b.OrderId and b.EmployeeId=d1.Id and b.TypeOder='service' and a.Chay=0 and a.Id_Code_sale=dis.Id 
group by  a.DayNew,a.Id,a.NhanVienID,a.O_number,b.EmployeeId,b.Id_tang,b.Money,b.OrderId,b.TypeOder,d1.S_Name,d1.S_Money,a.Note,d1.Id,dis.Discount_code_view,dis.Sale_code
GO
/****** Object:  StoredProcedure [dbo].[Order_Admin_Employee_0]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Order_Admin_Employee_0]
as
select b.EmployeeId,b.Money,b.OrderId,d2.E_Name,b.Id_tang
from  tblOrderDetail as b, tblStaffInEmployee as d1 , tblEmployees as d2
where b.EmployeeId=d1.EmployeeId and b.TypeOder='Employee' and d1.Id=d2.Id
group by  b.EmployeeId,b.Money,b.OrderId,d2.E_Name,b.Id_tang
GO
/****** Object:  StoredProcedure [dbo].[Order_Admin_Service_0]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Order_Admin_Service_0]
as
select b.Id_tang,b.Money,b.OrderId,b.TypeOder,d1.S_Name,d1.Id
from  tblOrderDetail as b, tblServicies as d1
where b.EmployeeId=d1.Id and b.TypeOder='service'
group by b.Id_tang,b.Money,b.OrderId,b.TypeOder,d1.S_Name,d1.Id
GO
/****** Object:  StoredProcedure [dbo].[RantingStarEmployee]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[RantingStarEmployee]
as
select r.DayNew,r.Id,r.O_number,z.E_Image,b.EmployeeId,z.E_Name,b.OrderId
from tblOrder as r, tblOrderDetail as b, tblEmployees as z
where r.Id=b.OrderId and z.Id=b.EmployeeId and b.TypeOder='Employee'

GO
/****** Object:  StoredProcedure [dbo].[SqlQueryNotificationStoredProcedure-1487d419-130e-4d9e-b78f-183ad4026965]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SqlQueryNotificationStoredProcedure-1487d419-130e-4d9e-b78f-183ad4026965] AS BEGIN BEGIN TRANSACTION; RECEIVE TOP(0) conversation_handle FROM [SqlQueryNotificationService-1487d419-130e-4d9e-b78f-183ad4026965]; IF (SELECT COUNT(*) FROM [SqlQueryNotificationService-1487d419-130e-4d9e-b78f-183ad4026965] WHERE message_type_name = 'http://schemas.microsoft.com/SQL/ServiceBroker/DialogTimer') > 0 BEGIN if ((SELECT COUNT(*) FROM sys.services WHERE name = 'SqlQueryNotificationService-1487d419-130e-4d9e-b78f-183ad4026965') > 0)   DROP SERVICE [SqlQueryNotificationService-1487d419-130e-4d9e-b78f-183ad4026965]; if (OBJECT_ID('SqlQueryNotificationService-1487d419-130e-4d9e-b78f-183ad4026965', 'SQ') IS NOT NULL)   DROP QUEUE [SqlQueryNotificationService-1487d419-130e-4d9e-b78f-183ad4026965]; DROP PROCEDURE [SqlQueryNotificationStoredProcedure-1487d419-130e-4d9e-b78f-183ad4026965]; END COMMIT TRANSACTION; END
GO
/****** Object:  StoredProcedure [dbo].[SqlQueryNotificationStoredProcedure-b314e4e6-2896-46c3-a715-e6e7cc5718e6]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SqlQueryNotificationStoredProcedure-b314e4e6-2896-46c3-a715-e6e7cc5718e6] AS BEGIN BEGIN TRANSACTION; RECEIVE TOP(0) conversation_handle FROM [SqlQueryNotificationService-b314e4e6-2896-46c3-a715-e6e7cc5718e6]; IF (SELECT COUNT(*) FROM [SqlQueryNotificationService-b314e4e6-2896-46c3-a715-e6e7cc5718e6] WHERE message_type_name = 'http://schemas.microsoft.com/SQL/ServiceBroker/DialogTimer') > 0 BEGIN if ((SELECT COUNT(*) FROM sys.services WHERE name = 'SqlQueryNotificationService-b314e4e6-2896-46c3-a715-e6e7cc5718e6') > 0)   DROP SERVICE [SqlQueryNotificationService-b314e4e6-2896-46c3-a715-e6e7cc5718e6]; if (OBJECT_ID('SqlQueryNotificationService-b314e4e6-2896-46c3-a715-e6e7cc5718e6', 'SQ') IS NOT NULL)   DROP QUEUE [SqlQueryNotificationService-b314e4e6-2896-46c3-a715-e6e7cc5718e6]; DROP PROCEDURE [SqlQueryNotificationStoredProcedure-b314e4e6-2896-46c3-a715-e6e7cc5718e6]; END COMMIT TRANSACTION; END
GO
/****** Object:  StoredProcedure [dbo].[Staff_client]    Script Date: 14/12/2020 12:02:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE proc [dbo].[Staff_client]
as
select a.E_Code,a.E_Name,b.TE_Admin_Staff,c.E_Details,a.E_Image,c.E_ImageList,c.E_Money,c.E_NumberStar_Admin,c.E_NumberStar_View1,c.Id,c.E_Status
from tblEmployees as a, TypeEmployee as b, tblStaffInEmployee as c
where a.TypeEmployeeId=b.Id and a.Id=c.EmployeeId and b.TE_Admin_Staff=0 and a.E_Active=0
GO
