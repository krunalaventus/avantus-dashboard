USE [master]
GO
/****** Object:  Database [customer_app]    Script Date: 9/20/2020 6:15:08 PM ******/
CREATE DATABASE [customer_app]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'customer_app', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\customer_app.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'customer_app_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\customer_app_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [customer_app] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [customer_app].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [customer_app] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [customer_app] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [customer_app] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [customer_app] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [customer_app] SET ARITHABORT OFF 
GO
ALTER DATABASE [customer_app] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [customer_app] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [customer_app] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [customer_app] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [customer_app] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [customer_app] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [customer_app] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [customer_app] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [customer_app] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [customer_app] SET  DISABLE_BROKER 
GO
ALTER DATABASE [customer_app] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [customer_app] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [customer_app] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [customer_app] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [customer_app] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [customer_app] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [customer_app] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [customer_app] SET RECOVERY FULL 
GO
ALTER DATABASE [customer_app] SET  MULTI_USER 
GO
ALTER DATABASE [customer_app] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [customer_app] SET DB_CHAINING OFF 
GO
ALTER DATABASE [customer_app] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [customer_app] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [customer_app] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'customer_app', N'ON'
GO
ALTER DATABASE [customer_app] SET QUERY_STORE = OFF
GO
USE [customer_app]
GO
/****** Object:  Table [dbo].[emails]    Script Date: 9/20/2020 6:15:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[emails](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](max) NULL,
	[password] [varchar](max) NULL,
	[server_address] [varchar](max) NULL,
	[port] [int] NULL,
	[port_a] [int] NULL,
	[type] [varchar](max) NULL,
	[status] [varchar](max) NULL,
	[customer_id] [int] NULL,
 CONSTRAINT [PK_emails] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tasks]    Script Date: 9/20/2020 6:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tasks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[task_title] [varchar](max) NULL,
	[task_description] [varchar](max) NULL,
	[completion_flag] [varchar](max) NULL,
	[customer_id] [int] NULL,
 CONSTRAINT [PK_tasks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 9/20/2020 6:15:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[first_name] [varchar](max) NULL,
	[last_name] [varchar](max) NULL,
	[email] [varchar](max) NULL,
	[user_name] [varchar](max) NULL,
	[password] [varchar](max) NULL,
	[api_link] [varchar](max) NULL,
	[status] [int] NULL,
	[user_role] [varchar](max) NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id], [first_name], [last_name], [email], [user_name], [password], [api_link], [status], [user_role]) VALUES (1, N'Super', N'User', N'admin@admin.com', N'admin', N'23d42f5f3f66498b2c8ff4c20b8c5ac826e47146', NULL, 1, N'super user')
INSERT [dbo].[users] ([id], [first_name], [last_name], [email], [user_name], [password], [api_link], [status], [user_role]) VALUES (2, N'Super', N'User', N'admin1@admin.com', N'admin1', N'23d42f5f3f66498b2c8ff4c20b8c5ac826e47146', NULL, 1, N'super user')
SET IDENTITY_INSERT [dbo].[users] OFF
GO
USE [master]
GO
ALTER DATABASE [customer_app] SET  READ_WRITE 
GO
