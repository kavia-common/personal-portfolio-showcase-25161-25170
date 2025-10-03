Routes and static assets overview

- Landing: /
- Regular screen: /regular
- Double-view calendar: /doubleview-calendar
- Double-view calendar (11401): /doubleview-calendar-11401

Implementation notes:
- Components live under src/components/screens and import CSS from src/styles to comply with CRA restrictions.
- All images referenced by the screens use public URLs under /assets/figmaimages/* which are located in public/assets/figmaimages.
- If new images are added to assets/figmaimages, copy them into public/assets/figmaimages to be available at runtime.
