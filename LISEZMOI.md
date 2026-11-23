# USE TES MOTS

Jeu de répliques façon *Use Your Words* : un grand écran, de 2 à 6 joueurs sur téléphone, 3 modes de jeu (Sous-titres, La Une, Phrase à trous).

## Fichiers
- `index.html` : tout le jeu (écran hôte + téléphones).
- `contenu.js` : tes phrases à trous, et les chemins de tes photos et vidéos.
- `medias/` : mets-y tes photos (.jpg, .png) et tes vidéos (.mp4, idéalement 5 à 15 s).

## Le mettre en ligne (obligatoire pour jouer avec les téléphones)
**Netlify (le plus rapide)** : glisse le dossier `use-tes-mots` sur app.netlify.com/drop.

**GitHub Pages** : crée un dépôt, envoie les fichiers, puis **Settings → Pages → Source : Deploy from a branch → `main` / `(root)` → Save**.

Ouvrir `index.html` en double-clic ne suffit pas : les téléphones ne pourraient pas l'atteindre.

## Jouer
1. Sur la télé ou l'ordi : ouvre le site, puis clique sur **Créer une partie**.
2. Sur les téléphones : scannez le QR code, ou ouvrez le site, cliquez sur **Rejoindre** et tapez le code à 4 lettres.
3. Lance la partie. Sur l'écran principal, la touche Espace (ou →) fait passer les révélations plus vite.

Pour tester seul, utilise le bouton **+ Ajouter un bot**.

## Ajouter du contenu
- **Pour une soirée** : glisse tes photos et vidéos sur l'écran d'accueil du jeu. Elles restent sur ton ordi, rien n'est envoyé en ligne.
- **De façon permanente** : copie les fichiers dans `medias/` et ajoute leurs chemins dans `contenu.js`, par exemple `"medias/clip-01.mp4",`.
- **Phrases à trous** : ajoute une ligne dans `contenu.js`, avec `___` à la place du trou.

## Comment ça marche
Les téléphones se connectent directement à l'écran principal, en pair-à-pair grâce à PeerJS : il n'y a aucun serveur à gérer. Il faut juste une connexion internet pour que les appareils se trouvent. Sur certains réseaux très verrouillés (Wi-Fi d'entreprise ou d'école), la connexion peut échouer ; dans ce cas, un partage de connexion 4G/5G règle le problème.
