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
  - `Plans/` (screen)
  - `StartUp/`
    - `EnterInfo` (screen):
      - Screen where user enters their info (weight, height birthday, etc) after creating an account
    - `Login` (screen):
      - Screen where users can login or create an account
  - `Workouts/` (navigator)
    - `CompleteWorkout` (screen)
    - `DesignWorkout` (screen)
    - `MainScreen` (screen)
    - `Running` (screen?)
