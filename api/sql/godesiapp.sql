-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 10, 2020 at 12:43 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `godesiapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `brand_name` varchar(250) NOT NULL,
  `logo` longtext NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `company_id`, `brand_name`, `logo`, `status`, `created_at`, `updated_at`) VALUES
(2, 2, 'test', 'uploads/godesi-1594362064322.jpeg', 1, '2020-07-10 06:21:04', '2020-07-10 06:21:04');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `parentid` int(11) DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `logo` longtext NOT NULL,
  `status` int(11) NOT NULL,
  `popularity_index_auto` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parentid`, `name`, `logo`, `status`, `popularity_index_auto`, `created_at`, `updated_at`) VALUES
(1, 0, 'demo', 'uploads/godesi-1594358741944.jpeg', 1, 0, '2020-07-10 05:25:41', '2020-07-10 05:25:41'),
(2, 1, 'test', 'uploads/godesi-1594361719506.jpeg', 1, 0, '2020-07-10 05:26:03', '2020-07-10 05:26:03');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `company_name` varchar(250) NOT NULL,
  `company_logo` longtext DEFAULT NULL,
  `wikipedia_link` longtext DEFAULT NULL,
  `status` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `country_id`, `company_name`, `company_logo`, `wikipedia_link`, `status`, `created_at`, `updated_at`) VALUES
(2, 2, 'test1', 'uploads/godesi-1594361946885.jpeg', 'demdoemd.co.in', 1, '2020-07-10 04:58:07', '2020-07-10 04:58:07');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `country_code` varchar(20) NOT NULL,
  `country_name` varchar(100) NOT NULL DEFAULT '',
  `country_image` longtext DEFAULT NULL,
  `is_local` tinyint(1) NOT NULL DEFAULT 0,
  `status` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country_code`, `country_name`, `country_image`, `is_local`, `status`) VALUES
(2, 'IN', 'India', 'uploads/godesi-1594361393530.jpeg', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `product_name` varchar(250) NOT NULL,
  `category_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `popularity_index_auto` int(11) NOT NULL,
  `popularity_index_manual` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `brand_id`, `product_name`, `category_id`, `status`, `popularity_index_auto`, `popularity_index_manual`, `created_at`, `updated_at`) VALUES
(2, 2, 'test', 2, 1, 1, 1, '2020-07-10 08:04:12', '2020-07-10 08:04:12'),
(3, 2, 'test', 2, 1, 1, 1, '2020-07-10 08:04:51', '2020-07-10 08:04:51'),
(4, 2, 'test', 2, 1, 1, 1, '2020-07-10 08:05:37', '2020-07-10 08:05:37'),
(5, 2, 'test', 2, 1, 1, 1, '2020-07-10 08:05:59', '2020-07-10 08:05:59'),
(6, 2, 'test', 2, 1, 1, 1, '2020-07-10 08:06:47', '2020-07-10 08:06:47'),
(7, 2, 'test', 2, 1, 1, 1, '2020-07-10 08:07:09', '2020-07-10 08:07:09'),
(8, 2, 'test', 2, 1, 1, 1, '2020-07-10 08:08:58', '2020-07-10 08:08:58');

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image_url` longtext NOT NULL,
  `main_image` tinyint(1) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`id`, `product_id`, `image_url`, `main_image`, `status`, `created_at`, `updated_at`) VALUES
(13, 8, 'uploads/godesi-1594375970745.jpeg', 0, 1, '2020-07-10 10:12:50', '2020-07-10 10:12:50'),
(14, 8, 'uploads/godesi-1594375970747.jpeg', 0, 1, '2020-07-10 10:12:50', '2020-07-10 10:12:50'),
(15, 8, 'uploads/godesi-1594375970749.jpeg', 0, 1, '2020-07-10 10:12:50', '2020-07-10 10:12:50'),
(16, 8, 'uploads/godesi-1594375978283.jpeg', 0, 1, '2020-07-10 10:12:58', '2020-07-10 10:12:58'),
(17, 8, 'uploads/godesi-1594375978285.jpeg', 0, 1, '2020-07-10 10:12:58', '2020-07-10 10:12:58'),
(18, 8, 'uploads/godesi-1594375978285.jpeg', 0, 1, '2020-07-10 10:12:58', '2020-07-10 10:12:58'),
(19, 8, 'uploads/godesi-1594375982519.jpeg', 0, 1, '2020-07-10 10:13:02', '2020-07-10 10:13:02'),
(20, 8, 'uploads/godesi-1594375982519.jpeg', 1, 1, '2020-07-10 10:13:02', '2020-07-10 10:13:02'),
(21, 8, 'uploads/godesi-1594375982520.jpeg', 0, 1, '2020-07-10 10:13:02', '2020-07-10 10:13:02');

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `reward1` longtext NOT NULL,
  `reward2` longtext NOT NULL,
  `reward3` longtext NOT NULL,
  `end_date` datetime NOT NULL,
  `start_date` datetime NOT NULL,
  `status` int(11) NOT NULL,
  `description` longtext NOT NULL,
  `sponsered_by` longtext NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `quiz_qus_ans`
--

CREATE TABLE `quiz_qus_ans` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `question` longtext NOT NULL,
  `answers` longtext NOT NULL,
  `status` int(11) NOT NULL,
  `points` varchar(250) NOT NULL,
  `image` longtext NOT NULL,
  `right_answer` longtext NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` int(11) NOT NULL,
  `image` longtext NOT NULL,
  `status` int(11) NOT NULL,
  `web` tinyint(1) DEFAULT 0,
  `web_priority` int(11) NOT NULL,
  `app` tinyint(1) NOT NULL DEFAULT 0,
  `app_priority` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `application_type` enum('web','app') DEFAULT NULL,
  `android_token` longtext DEFAULT NULL,
  `apple_token` longtext DEFAULT NULL,
  `status` int(11) NOT NULL COMMENT '1=active,2=block',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `application_type`, `android_token`, `apple_token`, `status`, `created_at`, `updated_at`, `user_role`) VALUES
(1, 'admin', 'admin@admin.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '9977225916', 'web', '', '', 1, '2020-07-09 10:26:28', '2020-07-09 10:26:28', 'admin'),
(2, 'test123', 'test@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '9977225916', 'web', '', '', 1, '2020-07-09 10:28:28', '2020-07-09 10:28:28', 'user'),
(5, 'test', 'test12@gmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '9977225916', 'web', '', '', 1, '2020-07-10 06:04:51', '2020-07-10 06:04:51', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_quizzes`
--

CREATE TABLE `user_quizzes` (
  `id` int(11) NOT NULL,
  `quiz_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `reward` longtext NOT NULL,
  `start_time` datetime NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz_qus_ans`
--
ALTER TABLE `quiz_qus_ans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_quizzes`
--
ALTER TABLE `user_quizzes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quiz_qus_ans`
--
ALTER TABLE `quiz_qus_ans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_quizzes`
--
ALTER TABLE `user_quizzes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
