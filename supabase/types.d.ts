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
      ReportAnswers: {
        Row: {
          id: number;
          response: string[];
          reportQuestion: number;
          report: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          response: string[];
          reportQuestion: number;
          report: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          response?: string[];
          reportQuestion?: number;
          report?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      Reports: {
        Row: {
          created_at: string;
          updated_at: string;
          id: string;
          title: string;
          score: number;
          summary: string | null;
          service: string;
        };
        Insert: {
          created_at?: string;
          updated_at?: string;
          id?: string;
          title: string;
          score: number;
          summary?: string | null;
          service: string;
        };
        Update: {
          created_at?: string;
          updated_at?: string;
          id?: string;
          title?: string;
          score?: number;
          summary?: string | null;
          service?: string;
        };
      };
      ReportQuestionServiceType: {
        Row: {
          created_at: string | null;
          updated_at: string | null;
          serviceType: number;
          reportQuestion: number;
        };
        Insert: {
          created_at?: string | null;
          updated_at?: string | null;
          serviceType: number;
          reportQuestion: number;
        };
        Update: {
          created_at?: string | null;
          updated_at?: string | null;
          serviceType?: number;
          reportQuestion?: number;
        };
      };
      ReportQuestions: {
        Row: {
          id: number;
          question: string;
          created_at: string;
          updated_at: string;
          type: string;
          subheading: string | null;
          responseOptions: string[] | null;
        };
        Insert: {
          id?: number;
          question: string;
          created_at?: string;
          updated_at?: string;
          type: string;
          subheading?: string | null;
          responseOptions?: string[] | null;
        };
        Update: {
          id?: number;
          question?: string;
          created_at?: string;
          updated_at?: string;
          type?: string;
          subheading?: string | null;
          responseOptions?: string[] | null;
        };
      };
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
      Services: {
        Row: {
          description: string | null;
          id: string;
          created_at: string;
          updated_at: string;
          name: string;
          serviceType: number;
        };
        Insert: {
          description?: string | null;
          id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
          serviceType: number;
        };
        Update: {
          description?: string | null;
          id?: string;
          created_at?: string;
          updated_at?: string;
          name?: string;
          serviceType?: number;
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

