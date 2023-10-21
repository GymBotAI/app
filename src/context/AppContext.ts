import { createContext } from "react";

import type { Session } from "@supabase/supabase-js";

export const AppContext = createContext<{
  session: Session | null;
}>({
  session: null,
});
