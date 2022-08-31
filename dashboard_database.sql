-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 31 août 2022 à 13:46
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dashboard_database`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `educational_level` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `cin` int(11) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin') DEFAULT NULL,
  `adress` text DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `activation_code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `first_name`, `course`, `type`, `date`, `educational_level`, `level`, `cin`, `last_name`, `email`, `password`, `role`, `adress`, `phone`, `activation_code`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'admin@admin.tn', '$2b$10$g12/IYnDzEdByVlcVCw7quR..ZeFav5tFtfG0.gCoRFi.1saqExTa', 'admin', NULL, NULL, NULL, '2022-08-08 11:52:36', '2022-08-08 11:52:36'),
(2, 'sarra', NULL, NULL, NULL, NULL, NULL, NULL, 'sarra', 'sarra@sarra.com', '$2b$10$LV/3UvyHxuW4MxD0dyq6/ewzQXR3gnipB83Etavp9htAjE5WYpwMi', 'admin', NULL, NULL, NULL, '2022-08-26 10:10:41', '2022-08-26 10:10:41'),
(6, 'sarra', NULL, NULL, NULL, NULL, NULL, NULL, 'sarra', 'sarra.ibnabdelkrim@esprit.tn', '$2b$10$yYQ8CkdWWeE9cNqWp/eNF.UBHuOoBA8wciigsyZxAERjpr8V5qtxq', 'admin', NULL, NULL, NULL, '2022-08-28 14:47:34', '2022-08-28 14:47:34'),
(9, 'abdelkrim', NULL, NULL, NULL, NULL, NULL, NULL, 'sarra', 'sarraabdelkrim88@gmail.com', '$2b$10$jNALCL/su3OoYZVy4Xr79.swJuF5qW1jM07/PLQP1YwOfeHqDRvwa', 'admin', NULL, NULL, NULL, '2022-08-31 09:28:01', '2022-08-31 09:28:01'),
(10, 'TEST', NULL, NULL, NULL, NULL, NULL, NULL, 'test', 'admin@admin.com', '$2b$10$lc.KWhKWDQft8Hct.NsO4eYw.PJAAqiaaCv8NeolPMerZ6.dySDL.', 'admin', NULL, NULL, NULL, '2022-08-31 09:48:58', '2022-08-31 09:48:58'),
(11, 'test', NULL, NULL, NULL, NULL, NULL, NULL, 'test', 'test@test.com', '$2b$10$ZVT37MNOgDTY6ipigVOHCe4TuaPox76eu7hudu8fxa6cDUahVm8lq', 'admin', NULL, NULL, NULL, '2022-08-31 10:04:54', '2022-08-31 10:04:54'),
(12, 'zzzzzz', NULL, NULL, NULL, NULL, NULL, NULL, 'zzzzz', 'test@test.fr', '$2b$10$sVMEtOtNNRCvLrKm7NKuUOVcLJVfGaJUQIgU5oiStaNpj9S9wiPl2', 'admin', NULL, NULL, NULL, '2022-08-31 10:20:08', '2022-08-31 10:20:08');

-- --------------------------------------------------------

--
-- Structure de la table `anneescolaires`
--

CREATE TABLE `anneescolaires` (
  `id` int(11) NOT NULL,
  `resultatfinal` varchar(255) DEFAULT NULL,
  `datedebut` datetime DEFAULT NULL,
  `datefin` datetime DEFAULT NULL,
  `rang` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `caisses`
--

CREATE TABLE `caisses` (
  `id` int(11) NOT NULL,
  `montant` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `caisses`
--

INSERT INTO `caisses` (`id`, `montant`, `date`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, '2022-08-11 10:21:19', '2022-08-11 10:21:19');

-- --------------------------------------------------------

--
-- Structure de la table `classes`
--

CREATE TABLE `classes` (
  `id` int(11) NOT NULL,
  `capacité` int(11) DEFAULT NULL,
  `num_class` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE `cours` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `prof` varchar(255) DEFAULT NULL,
  `students` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`id`, `name`, `type`, `prof`, `students`, `level`, `date`, `createdAt`, `updatedAt`) VALUES
(1, 'sarra ', 'xx', 'saee', '25', 1, '2022-09-17 00:00:00', '2022-08-24 14:21:25', '2022-08-24 14:21:25');

-- --------------------------------------------------------

--
-- Structure de la table `depenses`
--

CREATE TABLE `depenses` (
  `id` int(11) NOT NULL,
  `achat` varchar(255) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `donateurs`
--

CREATE TABLE `donateurs` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `montant` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `donations`
--

CREATE TABLE `donations` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `date_don` datetime DEFAULT NULL,
  `cin` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `dons`
--

CREATE TABLE `dons` (
  `id` int(11) NOT NULL,
  `nomdonateur` varchar(255) DEFAULT NULL,
  `prenomdonateur` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `montant` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `etudiants`
--

CREATE TABLE `etudiants` (
  `id` int(11) NOT NULL,
  `capacite` varchar(255) DEFAULT NULL,
  `numeroclasse` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `date_echeance` datetime DEFAULT NULL,
  `delivery_date` datetime DEFAULT NULL,
  `invoice_description` varchar(255) DEFAULT NULL,
  `invoice_number` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `invoiceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  `originalName` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `forms`
--

CREATE TABLE `forms` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `Niveau` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `level_reached` int(11) DEFAULT NULL,
  `educational_level` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `cin` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `product` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `niveaus`
--

CREATE TABLE `niveaus` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `niveaus`
--

INSERT INTO `niveaus` (`id`, `nom`, `createdAt`, `updatedAt`) VALUES
(1, 'Quatre', '2022-08-24 14:25:55', '2022-08-24 14:25:55');

-- --------------------------------------------------------

--
-- Structure de la table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `payment_name` varchar(255) DEFAULT NULL,
  `validity_date` datetime DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `profils`
--

CREATE TABLE `profils` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `rib` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `resultats`
--

CREATE TABLE `resultats` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `matiere` varchar(255) DEFAULT NULL,
  `note` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `resultats`
--

INSERT INTO `resultats` (`id`, `type`, `matiere`, `note`, `createdAt`, `updatedAt`) VALUES
(5, 'Admis', 'qqqq', 20, '2022-08-24 17:24:33', '2022-08-24 17:24:33'),
(6, '', '', 0, '2022-08-25 21:31:48', '2022-08-25 21:31:48');

-- --------------------------------------------------------

--
-- Structure de la table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `cour` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `cin` int(11) DEFAULT NULL,
  `educational_year` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `students`
--

INSERT INTO `students` (`id`, `first_name`, `last_name`, `cour`, `level`, `type`, `cin`, `educational_year`, `createdAt`, `updatedAt`) VALUES
(1, 'sarra', 'sarra', 'cc', 1, 'cc', 11235655, '2023-22-23', '2022-08-18 23:32:55', '2022-08-18 23:32:55'),
(7, 'abdelkrim', 'ibnabdelkrim', 'ss', 1, 'xx', 12345678, '2022-08-28', '2022-08-24 14:08:16', '2022-08-24 14:08:16'),
(8, 'abdelkrim', 'sarra', 'ss', 1, 'dd', 12345678, '2022-08-26', '2022-08-31 09:51:16', '2022-08-31 09:51:16');

-- --------------------------------------------------------

--
-- Structure de la table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `teachers`
--

INSERT INTO `teachers` (`id`, `first_name`, `last_name`, `phone`, `email`, `gender`, `state`, `createdAt`, `updatedAt`) VALUES
(2, 'sarra', 'sarra', '50427750', 'sarra@sarra.com', 'M', 'Active', '2022-08-16 11:43:43', '2022-08-16 11:43:43'),
(3, 'sarra', 'mohamed', '22223333', 'test@test.tn', 'M', 'Active\r\n', '2022-08-20 13:08:15', '2022-08-20 13:08:15'),
(4, 'test', 'test', '12345678', 'test@test.com', 'F', 'Active', '2022-08-20 13:09:17', '2022-08-20 13:09:17'),
(20, '', '', '', '', '', '', '2022-08-30 13:54:59', '2022-08-30 13:54:59'),
(21, 'abdelkrim', 'ibnabdelkrim', '50427750', 'sarraabdelkrim88@gmail.com', 'M', 'Active', '2022-08-31 09:28:45', '2022-08-31 09:28:45');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `educational_level` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `cin` int(11) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','client') DEFAULT NULL,
  `adress` text DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `activation_code` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `first_name`, `course`, `type`, `date`, `educational_level`, `level`, `cin`, `last_name`, `email`, `password`, `role`, `adress`, `phone`, `activation_code`, `createdAt`, `updatedAt`) VALUES
(1, 'test', NULL, NULL, NULL, NULL, NULL, 5656565, 'test', 'test@test.com', '$2b$10$WFJfrxadhwN1yAcrB8EOY.557mEs62.BEtBxV3e3FwWvQEHyDJkfC', 'client', NULL, '54545454', NULL, '2022-08-05 10:30:35', '2022-08-05 10:30:35'),
(3, 'test', NULL, NULL, NULL, NULL, NULL, 5656565, 'test', 'admin@admin.com', '$2b$10$WFJfrxadhwN1yAcrB8EOY.557mEs62.BEtBxV3e3FwWvQEHyDJkfC', 'admin', NULL, '54545454', NULL, '2022-08-05 10:30:35', '2022-08-05 10:30:35'),
(4, 'admin', NULL, NULL, NULL, NULL, NULL, NULL, 'admin', 'admin@gmail.com', '$2b$10$mJ6D1BmKk7NNC0sk8.C1U./j5nFmAh95UzOddKdOKc2VsQjmFx7dK', 'client', NULL, NULL, NULL, '2022-08-07 20:20:18', '2022-08-07 20:20:18'),
(5, 'test', NULL, NULL, NULL, NULL, NULL, NULL, 'sarra', 'sarraabdelkrim88@gmail.com', '$2b$10$W9uyL34NEDYb5sdmUXs/ie.aMsWSc.BLMvJXV6qlHHaOlz4LAhM6e', 'client', NULL, NULL, NULL, '2022-08-27 20:10:01', '2022-08-27 20:10:01');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `anneescolaires`
--
ALTER TABLE `anneescolaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `caisses`
--
ALTER TABLE `caisses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cours`
--
ALTER TABLE `cours`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `depenses`
--
ALTER TABLE `depenses`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `donateurs`
--
ALTER TABLE `donateurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `donations`
--
ALTER TABLE `donations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `dons`
--
ALTER TABLE `dons`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `etudiants`
--
ALTER TABLE `etudiants`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `invoiceId` (`invoiceId`);

--
-- Index pour la table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `niveaus`
--
ALTER TABLE `niveaus`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `profils`
--
ALTER TABLE `profils`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `resultats`
--
ALTER TABLE `resultats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `anneescolaires`
--
ALTER TABLE `anneescolaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `caisses`
--
ALTER TABLE `caisses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `classes`
--
ALTER TABLE `classes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cours`
--
ALTER TABLE `cours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `depenses`
--
ALTER TABLE `depenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `donateurs`
--
ALTER TABLE `donateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `donations`
--
ALTER TABLE `donations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `dons`
--
ALTER TABLE `dons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `etudiants`
--
ALTER TABLE `etudiants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `niveaus`
--
ALTER TABLE `niveaus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `profils`
--
ALTER TABLE `profils`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `resultats`
--
ALTER TABLE `resultats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `expenses`
--
ALTER TABLE `expenses`
  ADD CONSTRAINT `expenses_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `expenses_ibfk_2` FOREIGN KEY (`invoiceId`) REFERENCES `invoices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
