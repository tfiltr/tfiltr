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
      Service: {
        Row: {
          description: string | null;
          id: string;
          created_at: string;
          updated_at: string;
          placeId: string;
          serviceType: string | null;
        };
        Insert: {
          description?: string | null;
          id?: string;
          created_at?: string;
          updated_at?: string;
          placeId?: string;
          serviceType?: string | null;
        };
        Update: {
          description?: string | null;
          id?: string;
          created_at?: string;
          updated_at?: string;
          placeId?: string;
          serviceType?: string | null;
        };
      };
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

