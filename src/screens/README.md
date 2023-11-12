# Screens folder

This folder contains all the screens for the app.

## Rules

- Screens may be grouped and nested in folders if they are related to each other.
- A [navigator][1] should be created for each group of screens. A navigator should look like this:
  ```
  🧭 MyNavigator
  ├ 📲 Screen1
  │ ├ 📂 components
  │ │ └ 📄 Component1
  │ └ 📄 index.tsx
  ├ 📲 Screen2.tsx
  └ 📄 index.tsx
  ```
  Where `MyNavigator` is a folder containing a `index.tsx` file which exports a navigator component.
- A navigator shouldn't contain any non-navigation logic or state[^1]

[^1]: Maybe there can be exceptions to this rule, but please discuss it with the team first.

## Folder structure

```
📂 screens/
├ 📂 StartUp/
│ ├ 📲 EnterInfo             screen     Screen where user enters their info (weight, height birthday, etc) after creating an account
│ └ 📲 Login                 screen     Screen where users can login or create an account
└ 📂 bottom-tabs/                       Folder containing all the screens that are part of the bottom tab navigator
  ├ 📲 Chat/                 screen
  ├ 📲 Food/                 screen
  ├ 🧭 Home/                 navigator
  │ ├ 📲 Home.tsx            screen
  │ └ 📲 Settings/           screen
  ├ 📲 Plans/                screen
  └ 🧭 Workouts/             navigator
    ├ 📲 CompleteWorkout     screen
    ├ 📲 DesignWorkout       screen
    ├ 📲 MainScreen          screen
    └ 📲 Running             screen?
```

## Emoji key

| Emoji | Description | Type           |
| :---: | :---------- | :------------- |
|  📲   | Screen      | File or folder |
|  🧭   | Navigator   | Folder         |
|  📂   | Folder      |                |
|  📄   | File        |                |

<!-- Links -->

[1]: https://reactnavigation.org/docs/nesting-navigators
