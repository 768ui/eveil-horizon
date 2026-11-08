# Éveil Horizon

Site vitrine responsive en HTML, CSS et JavaScript. Le projet est conçu pour présenter l’activité et ses accompagnements. **Il n’est pas encore prêt à être publié en production** : consultez les points de vérification ci-dessous avant mise en ligne.

## Pages
- `index.html` : accueil
- `services.html` : accompagnements individuels
- `collective.html` : interventions collectives
- `tarifs.html` : tarifs à compléter et lien de réservation
- `boutique.html` : présentation de ressources à venir (aucun paiement/téléchargement actif)
- `contact.html` : formulaire préparé pour Netlify Forms
- `merci.html` : confirmation après soumission Netlify
- `espace-client.html` : page informative uniquement, sans authentification
- `admin.html` : page informative uniquement, sans administration

## Personnalisation
- Remplacer le logo à `assets/logo.svg`.
- Ajouter le lien de réservation découverte dans `tarifs.html` quand il sera connu.
- Renseigner les tarifs et les mentions légales / politique de confidentialité avant publication.
- Ajouter le lien d’invitation Discord si souhaité.

## Formulaire de contact
Le formulaire HTML utilise Netlify Forms (`data-netlify="true"`). Pour recevoir les messages, il faut déployer ce dépôt sur Netlify, activer/détecter le formulaire dans le tableau de bord du site et configurer les notifications. **GitHub Pages ne traite pas les soumissions de formulaire.** Le formulaire ne doit pas être annoncé comme opérationnel tant que le déploiement et un test d’envoi réel ne sont pas terminés. Les champs recueillent des données personnelles : ajouter une information de confidentialité adaptée avant publication.

## Comptes clients et administration
Aucun compte, authentification, stockage de documents, tableau de bord client ou interface admin n’est fonctionnel dans cette version. Pour construire ces fonctionnalités, prévoir un backend adapté, une authentification avec gestion sécurisée des sessions, des permissions vérifiées côté serveur, une base de données et un stockage privé. Pour chaque objet, appliquer des règles d’accès qui limitent l’accès au propriétaire (par exemple des politiques RLS correctement testées). Ne jamais mettre de secret ou de document confidentiel dans le dépôt public ou dans le JavaScript livré au navigateur. Effectuer une revue de sécurité avant d’accepter de vraies données clients.

## Contrôle local
Ouvrir `index.html` dans un navigateur moderne, ou lancer `python3 -m http.server 8000` et ouvrir `http://localhost:8000`. Vérifier les liens et le formulaire après déploiement sur l’hébergeur cible. Aucun test réel Android/tablette ne peut être confirmé sans essai sur les appareils.

## Publication
La vitrine statique est techniquement compatible avec GitHub Pages. Le formulaire ne sera pas traité par GitHub Pages. Ne pas publier avant d’avoir complété les informations légales/confidentialité et testé l’affichage et tous les parcours sur appareils réels.
