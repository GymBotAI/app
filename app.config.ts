if (process.env.EXPO_PUBLIC_GYMBOT != "1") {
  throw new Error("Missing env vars");
}

export default {
  expo: {
    experiments: {
      tsconfigPaths: true,
    },
  },
};
