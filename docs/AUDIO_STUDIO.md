# Audio Studio — ambiance et commentaires

## Fonctionnalités

L'inspecteur Audio permet d'ajouter des musiques d'ambiance ou commentaires enregistrés, d'importer MP3/WAV/M4A/OGG/WebM (30 Mo max), ou d'enregistrer une narration avec le microphone du navigateur. Les fichiers sont copiés dans `output/<recording>/audio-<id>.<ext>`.

Chaque piste possède son début, sa durée, son volume, son mute, ses fondus d'entrée/sortie et un mode boucle. Les pistes sont visibles dans la timeline. Le moteur Remotion mélange les pistes dans la même composition utilisée par le Player et l'export MP4. Les fichiers sources restent intacts.

Tous les sliders natifs encore présents dans `apps/studio/app/page.tsx` ont été remplacés par les sliders Arc UI avec compteur animé. Le panneau Audio utilise lui aussi Arc Slider, Switch et Button.

## Test

```bash
pnpm install
pnpm test
pnpm typecheck
pnpm studio:build
pnpm studio
```

1. Ouvrir une capture existante.
2. Dans Audio, importer un MP3 d'ambiance et régler son volume à 30 %.
3. Importer un commentaire audio ou cliquer sur « Enregistrer au microphone », autoriser le microphone, puis arrêter.
4. Vérifier les deux pistes dans la timeline et la lecture synchronisée.
5. Sauvegarder, recharger, exporter un MP4, vérifier le mixage audio avec ffprobe ou un lecteur.

## Limites de cette version

La timeline audio affiche les clips mais leur déplacement précis se fait dans l'inspecteur, pas encore par drag. Pas de waveform, ducking automatique, bibliothèque musicale ni réduction du bruit. Les autorisations microphone nécessitent localhost ou HTTPS. L'import limite chaque fichier à 30 Mo. Ne pas fusionner avant vérification du build et de l'export avec deux pistes simultanées.

Utiliser uniquement des pistes audio dont les droits permettent l'exploitation prévue.
