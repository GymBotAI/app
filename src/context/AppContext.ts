import { createContext } from "react";

import type { Database } from "../types/database";
import type { Session } from "@supabase/supabase-js";

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
