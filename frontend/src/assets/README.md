Image assets setup

- Place your real images in frontend/public/images
- Recommended filenames (you can change, then update src/assets/images.js):
  - logo.png
  - hero-air.jpg
  - hero-sea.jpg
  - hero-ground.jpg
  - hero-warehouse.jpg
  - service-air.jpg
  - service-sea.jpg
  - service-inland.jpg
  - service-customs.jpg
  - service-warehousing.jpg
  - about-story.jpg

Notes
- Files in public/images are served statically by Vite; no import needed.
- Components will fallback to placeholder.svg if an image fails to load.
- Keep images under ~300–400KB for faster loads; prefer 1600x900 or 1200x600 for hero.
