# `src/screens`

This folder contains all the screens for the app.
Screens may be nested in folders if they are related to each other.

The `src/screens/bottom-tabs` folder contains all the screens that are part of the bottom tab navigator.

## Folder structure

- `src/screens/`
  - `Chat/` (screen)
  - `Food/` (screen)
  - `Home/` (navigator)
    - `Home.tsx` (screen)
    - `Settings/` (screen)
  - `Plans/`
  - `StartUp/`
    - `EnterInfo`:
      - Screen where user enters their info (weight, height birthday, etc) after creating an account
    - `Login`:
      - Screen where users can login or create an account
  - `Workouts/`
    - `CompleteWorkout`
    - `DesignWorkout`
    - `MainScreen`
    - `Running`
