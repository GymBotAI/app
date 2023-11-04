import type { NavigationProp as _NavigationProp } from "@react-navigation/native";

export type NavigationScreens = {
  StartUp: undefined;
  SignUp: undefined;

  Home: undefined;
  Plans: undefined;
  Workouts: undefined;
  Food: undefined;
  Chat: undefined;

  DesignWorkout: undefined;
  CompleteWorkout: undefined;

  Settings: {
    name?: string;
    birthday?: string;
    gender?: string;
    weight?: number;
    height?: number;
  };
};
export type NavigationScreen = keyof NavigationScreens;

export type NavigationProp = _NavigationProp<NavigationScreens>;
