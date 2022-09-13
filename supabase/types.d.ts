export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      example: {
        Row: {
          id: number;
          name: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
          created_at?: string | null;
        };
      };
      Service: {
        Row: {
          description: string | null;
          id: string;
          created_at: string;
          updated_at: string;
          name: string;
        };
        Insert: {
          description?: string | null;
          id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
        };
        Update: {
          description?: string | null;
          id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
        };
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
  };
}

