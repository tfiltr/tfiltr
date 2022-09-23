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
      ServiceTypes: {
        Row: {
          id: number;
          name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      ReportAnswers: {
        Row: {
          id: number;
          response: Json;
          report: string;
          reportQuestion: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          response: Json;
          report: string;
          reportQuestion: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          response?: Json;
          report?: string;
          reportQuestion?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      ReportQuestions: {
        Row: {
          id: number;
          question: string;
          type: string;
          subheading: string | null;
          responseOptions: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          question: string;
          type: string;
          subheading?: string | null;
          responseOptions?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          question?: string;
          type?: string;
          subheading?: string | null;
          responseOptions?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      ReportQuestionServiceType: {
        Row: {
          serviceType: number;
          created_at: string;
          updated_at: string;
          reportQuestion: number;
        };
        Insert: {
          serviceType: number;
          created_at?: string;
          updated_at?: string;
          reportQuestion: number;
        };
        Update: {
          serviceType?: number;
          created_at?: string;
          updated_at?: string;
          reportQuestion?: number;
        };
      };
      Reports: {
        Row: {
          id: string;
          title: string;
          score: number;
          summary: string;
          service: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          score: number;
          summary: string;
          service: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          score?: number;
          summary?: string;
          service?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      example: {
        Row: {
          id: number;
          created_at: string | null;
          name: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          name?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          name?: string | null;
        };
      };
      Service: {
        Row: {
          id: string;
          created_at: string;
          updated_at: string;
          name: string;
          description: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
          description?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
          description?: string | null;
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

