import type { NavigationProp as _NavigationProp } from "@react-navigation/native";

export type NavigationScreens = {
  Account: undefined;
  Login: undefined;
  SignUp: undefined;

  Home: undefined;
  Plans: undefined;
  Workouts: undefined;
  Food: undefined;
  Chat: undefined;

  DesignWorkout: undefined;
  Settings: undefined;
};

export type NavigationProp = _NavigationProp<NavigationScreens>;
