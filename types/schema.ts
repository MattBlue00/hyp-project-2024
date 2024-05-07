export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Person: {
        Row: {
          bio: string
          education: string
          full_name: string
          id: number
          main_expertise: string
          main_role: string
          motto: string
          past_experience: string
          picture: string
        }
        Insert: {
          bio: string
          education: string
          full_name: string
          id?: number
          main_expertise: string
          main_role: string
          motto: string
          past_experience: string
          picture: string
        }
        Update: {
          bio?: string
          education?: string
          full_name?: string
          id?: number
          main_expertise?: string
          main_role?: string
          motto?: string
          past_experience?: string
          picture?: string
        }
        Relationships: []
      }
      Project: {
        Row: {
          description: string
          id: number
          name: string
          picture: string
          supervisor_id: number
        }
        Insert: {
          description: string
          id?: number
          name: string
          picture: string
          supervisor_id: number
        }
        Update: {
          description?: string
          id?: number
          name?: string
          picture?: string
          supervisor_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Project_supervisor_id_fkey"
            columns: ["supervisor_id"]
            isOneToOne: false
            referencedRelation: "Person"
            referencedColumns: ["id"]
          },
        ]
      }
      Service: {
        Row: {
          contacts: string
          description: string
          duration: string | null
          id: number
          name: string
          opening_hours: string
          picture: string
          supervisor_id: number
        }
        Insert: {
          contacts: string
          description: string
          duration?: string | null
          id?: number
          name: string
          opening_hours: string
          picture: string
          supervisor_id: number
        }
        Update: {
          contacts?: string
          description?: string
          duration?: string | null
          id?: number
          name?: string
          opening_hours?: string
          picture?: string
          supervisor_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Service_supervisor_id_fkey"
            columns: ["supervisor_id"]
            isOneToOne: false
            referencedRelation: "Person"
            referencedColumns: ["id"]
          },
        ]
      }
      Testimonial: {
        Row: {
          author_full_name: string
          id: number
          author_picture: string
          service_id: number
          statement: string
        }
        Insert: {
          author_full_name: string
          id?: number
          author_picture: string
          service_id: number
          statement: string
        }
        Update: {
          author_full_name?: string
          id?: number
          author_picture?: string
          service_id?: number
          statement?: string
        }
        Relationships: [
          {
            foreignKeyName: "Testimonial_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "Service"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
