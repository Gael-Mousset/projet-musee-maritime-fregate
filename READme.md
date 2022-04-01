## Suivez les commandes suivantes pour pouvoir lancer le projet :

+ Tout d'abord il faut cloner le projet :

```bash git clone https://forge.iut-larochelle.fr/tjamard/2021-2022-info2-dw-projet-musee-maritime-fregate.git ```

+ Ce positioner dans le projet :

```bash cd 2021-2022-info2-dw-projet-musee-maritime-fregate ```

+ Il faut par la suite lancer docker : 

```bash docker-compose up --build ```

+ Ouvrir un nouveau terminal et ce positionner a nouveau dans le projet

+ Une fois a nouveau dans le projet, il faut entrer dans le container :

```bash docker-compose exec php-fpm bash ```

+ Une fois dans le container effectuer les differentes commandes dans l'ordre :

```bash cd sfapi ```

```bash composer install ```

```bash php bin/console d:m:m ```

```bash php bin/console d:f:l ```

+ Il vous suffit d'aller sur l'url [localhost:3000](localhost:3000)

