const requiredEnvs = ["GYMBOT", "SUPABASE_ANON_KEY", "SUPABASE_URL"];

for (const env of requiredEnvs) {
  const realEnv = `EXPO_PUBLIC_${env}`;
  if (!process.env[realEnv]) {
    throw new Error(
      `Missing environment variable \"${realEnv}\". Did you forget to set up your .env.local file?`,
    );
  }
}

export default {
  expo: {
    scheme: "gymbot",
    experiments: {
      tsconfigPaths: true,
    },
  },
};
