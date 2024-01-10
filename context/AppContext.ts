import type { Session } from "@supabase/supabase-js";
import type { Database } from "$types/database";

import { createContext } from "react";

export type UserData = Partial<Database["public"]["Tables"]["users"]["Row"]>;

export const AppContext = createContext<{
  session: Session | null;
  userData: UserData;
  setUserData: (data: UserData) => void;
}>({
  session: null,
  userData: {},
  setUserData: () => {},
});
