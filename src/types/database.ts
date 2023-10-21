export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          birthday: string | null;
          gender: string | null;
          height: number | null;
          id: string;
          name: string | null;
          weight: number | null;
        };
        Insert: {
          birthday?: string | null;
          gender?: string | null;
          height?: number | null;
          id: string;
          name?: string | null;
          weight?: number | null;
        };
        Update: {
          birthday?: string | null;
          gender?: string | null;
          height?: number | null;
          id?: string;
          name?: string | null;
          weight?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
