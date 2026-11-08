# Éveil Horizon

Site vitrine responsive pour Éveil Horizon — accompagnement, développement personnel, accompagnements collectifs et ressources numériques.

## Structure du projet

- `index.html` : page d’accueil
- `services.html` : accompagnements individuels
- `collective.html` : accompagnements collectifs
- `espace-client.html` : espace client demo
- `tarifs.html` : tarifs et réservations
- `boutique.html` : boutique numérique
- `contact.html` : formulaire de contact
- `admin.html` : interface d’administration demo
- `style.css` : styles globaux et responsive
- `app.js` : interactions et configuration
- `assets/logo.svg` : logo vectoriel

## Démarrage rapide

1. Ouvrez `index.html` dans votre navigateur.
2. Pour un rendu plus proche du site publié, utilisez un petit serveur local :
   ```bash
   python3 -m http.server 8000
   ```
3. Accédez ensuite à `http://localhost:8000`.

## Personnalisation

- Modifier les liens Calendly et réseaux sociaux dans `app.js`.
- Remplacer le logo dans `assets/logo.svg`.
- Ajuster les tarifs dans `tarifs.html` et `app.js`.

## Remarques

- Les accompagnements ne sont pas présentés comme des soins médicaux ni comme une psychothérapie.
- Les données sensibles ne sont pas stockées dans le dépôt public GitHub.
- Les éléments de paiement et d’authentification sont préparés pour être connectés à une solution sécurisée de type Supabase, Firebase ou Stripe. 
