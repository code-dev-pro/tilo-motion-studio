# Enregistrer Tilo sans écrire de scénario

## Démarrage

1. Lance Tilo sur `http://localhost:3000`.
2. Dans Motion Studio : `pnpm install && pnpm exec playwright install chromium && pnpm studio`.
3. Ouvre `http://127.0.0.1:3333`.
4. Choisis **Enregistrement manuel**, URL `http://localhost:3000`, nom `tilo-demo`.
5. Clique **Démarrer l'enregistrement**. Une fenêtre Chromium s'ouvre.
6. Manipule Tilo dans cette fenêtre (clics, drag, scroll, 3D).
7. Reviens dans Motion Studio, clique **Arrêter** et attends l'état **ready**.
8. Choisis le format et clique **Exporter en MP4**.

Résultats : `output/tilo-demo/capture.webm`, `events.json`, `scenario.json` et `landscape.mp4`.

## Important

- L'interface enregistre une fenêtre Chromium **distincte** de ton navigateur habituel.
- Les événements enregistrés sont les clics, déplacements et scrolls. Le moteur cinématique utilise principalement les clics pour les zooms automatiques.
- Le rendu MP4 n'est pas un montage interactif multipiste. Le zoom peut nécessiter des ajustements.
- Ne ferme pas la fenêtre Chromium avant d'avoir arrêté depuis Motion Studio.
- Pour des raisons de sécurité, seules les URL locales (localhost et 127.0.0.1) sont autorisées.
- N'enregistre pas de données personnelles ni de documents privés.
- Ce mode est à valider sur macOS : aucun test de capture manuelle réelle n'a encore été exécuté dans cet environnement.

## Vérification

```bash
pnpm test
pnpm typecheck
pnpm studio:build
```

Si le bouton Arrêter ne termine pas le processus, ferme le Studio puis interromps le processus Chromium/recorder dans le terminal. Vérifie le contenu de `output/<id>` avant un nouvel essai.
