import { createContext } from "react";

import type { Database } from "../types/database";
import type { Session } from "@supabase/supabase-js";

export const AppContext = createContext<{
  session: Session | null;
  userData: Partial<Database["public"]["Tables"]["users"]["Row"]>;
}>({
  session: null,
  userData: {},
});
