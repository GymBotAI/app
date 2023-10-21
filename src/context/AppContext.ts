import { createContext } from "react";

import type { Session } from "@supabase/supabase-js";

export const AppContext = createContext<{
  session: Session | null;
  userData: {
    name?: string;
    birthday?: string;
    gender?: string;
    weight?: number;
    height?: number;
  };
}>({
  session: null,
  userData: {},
});
