import {MergeDeep} from 'type-fest'

import { nonNullDatabaseExcept } from '.'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = MergeDeep<oldDatabase, nonNullDatabaseExcept>

export type oldDatabase = {
  public: {
    Tables: {
      category: {
        Row: {
          category_id: number
          name: string
        }
        Insert: {
          category_id?: number
          name?: string
        }
        Update: {
          category_id?: number
          name?: string
        }
        Relationships: []
      }
      colors: {
        Row: {
          color_id: number
          color_name: string
        }
        Insert: {
          color_id?: number
          color_name: string
        }
        Update: {
          color_id?: number
          color_name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      images: {
        Row: {
          created_at: string
          image_id: number
          image_url: string | null
          is_title: boolean | null
          product_id: number | null
        }
        Insert: {
          created_at?: string
          image_id?: number
          image_url?: string | null
          is_title?: boolean | null
          product_id?: number | null
        }
        Update: {
          created_at?: string
          image_id?: number
          image_url?: string | null
          is_title?: boolean | null
          product_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "images_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
        ]
      }
      likes: {
        Row: {
          created_at: string
          like_id: number
          product_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          like_id?: number
          product_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          like_id?: number
          product_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "likes_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      product_options: {
        Row: {
          color_id: number | null
          option_id: number
          product_id: number | null
          size_id: number | null
          stock_quantity: number
        }
        Insert: {
          color_id?: number | null
          option_id?: number
          product_id?: number | null
          size_id?: number | null
          stock_quantity: number
        }
        Update: {
          color_id?: number | null
          option_id?: number
          product_id?: number | null
          size_id?: number | null
          stock_quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_options_color_id_fkey"
            columns: ["color_id"]
            isOneToOne: false
            referencedRelation: "colors"
            referencedColumns: ["color_id"]
          },
          {
            foreignKeyName: "product_options_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["product_id"]
          },
          {
            foreignKeyName: "product_options_size_id_fkey"
            columns: ["size_id"]
            isOneToOne: false
            referencedRelation: "sizes"
            referencedColumns: ["size_id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          image: string | null
          metadata: Json | null
          name: string | null
          price: string | null
          product_id: number
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          image?: string | null
          metadata?: Json | null
          name?: string | null
          price?: string | null
          product_id?: number
        }
        Update: {
          active?: boolean | null
          description?: string | null
          image?: string | null
          metadata?: Json | null
          name?: string | null
          price?: string | null
          product_id?: number
        }
        Relationships: []
      }
      sizes: {
        Row: {
          size_id: number
          size_name: string
        }
        Insert: {
          size_id?: number
          size_name?: string
        }
        Update: {
          size_id?: number
          size_name?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          full_name: string | null
          payment_method: Json | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          payment_method?: Json | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          payment_method?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_product_details: {
        Args: {
          product_id_input: number
        }
        Returns: Database["public"]["CompositeTypes"]["product_details_type"]
      }
      get_sizes_and_stock_for_color: {
        Args: {
          product_id_input: number
          color_id_input: number
        }
        Returns: {
          size_id: number
          size_name: string
          stock_quantity: number
        }[]
      }
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      color_type: {
        color_id: number | null
        color_name: string | null
      }
      image_type: {
        image_id: number | null
        image_url: string | null
        is_title: boolean | null
      }
      product_details_type: {
        product_id: number | null
        name: string | null
        description: string | null
        price: number | null
        colors: Database["public"]["CompositeTypes"]["color_type"][] | null
        images: Database["public"]["CompositeTypes"]["image_type"][] | null
      }
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
