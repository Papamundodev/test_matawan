# Test Integration - HTML CSS/SASS avec Vite

## Instructions

### Fiche Horaire

Dans le cadre de votre mission vous serez amené à réaliser des fiches horaires. Il s'agit des
fiches informatives présentes aux arrêts de bus reprenant le parcours de la ligne et les
horaires de passage à l'arrêt auquel nous sommes.

Dans ce cadre nous vous demandons de réaliser le tableau ci dessous :

- "a" et "K" étant des notes de renvoi. Une note de renvoie est une annotation sur un
  horaire. Elle renvoie à une légende non demandée dans cet exercice.
- Toutes les colonnes doivent faire la même taille

### Thermomètre de Ligne

Un thermomètre de ligne est la vue graphique du parcours d'un bus. Dans notre exemple, la ligne a trois parcours
différents suivant les horaires. Nous vous demandons de réaliser ce thermomètre en suivant les consignes suivantes :

1. Identifier les arrêts importants (départ / terminus) :

   - Ils seront représentés par un rectangle noir
   - Leur rendu sera différent (Ex. BEAUVALLON)

2. Le thermomètre reprendra la couleur de la ligne (Ex. ici la M3 a la couleur violette)

3. L'arrêt "Vous êtes ici" aura :
   - Un point noir au lieu d'un rectangle
   - Son texte sera écrit en rouge (Ex. Cimetière St Pierre)

## Installation

1. Cloner le repository :

```bash
git clone https://github.com/Papamundodev/test_matawan.git test_matawan
```

2. Installer les dépendances :

```bash
cd test_matawan
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```
