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
      clients: {
        Row: {
          birth_date: string | null;
          birth_month: string | null;
          birth_year: string | null;
          city: string | null;
          client_id: string;
          country: string | null;
          email: string | null;
          first_name: string | null;
          gender: string | null;
          has_premium: boolean | null;
          joined: string;
          last_name: string | null;
          phone: string | null;
          profile_picture_url: string | null;
          state: string | null;
          type: Database['public']['Enums']['user_type'] | null;
          username: string | null;
        };
        Insert: {
          birth_date?: string | null;
          birth_month?: string | null;
          birth_year?: string | null;
          city?: string | null;
          client_id: string;
          country?: string | null;
          email?: string | null;
          first_name?: string | null;
          gender?: string | null;
          has_premium?: boolean | null;
          joined?: string;
          last_name?: string | null;
          phone?: string | null;
          profile_picture_url?: string | null;
          state?: string | null;
          type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
        };
        Update: {
          birth_date?: string | null;
          birth_month?: string | null;
          birth_year?: string | null;
          city?: string | null;
          client_id?: string;
          country?: string | null;
          email?: string | null;
          first_name?: string | null;
          gender?: string | null;
          has_premium?: boolean | null;
          joined?: string;
          last_name?: string | null;
          phone?: string | null;
          profile_picture_url?: string | null;
          state?: string | null;
          type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'clients_client_id_fkey';
            columns: ['client_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      customers: {
        Row: {
          id: string;
          stripe_customer_id: string | null;
        };
        Insert: {
          id: string;
          stripe_customer_id?: string | null;
        };
        Update: {
          id?: string;
          stripe_customer_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'customers_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      gyms: {
        Row: {
          active_clients: string | null;
          active_personal_trainers: number | null;
          certificate: boolean | null;
          city: string | null;
          completed_clients: string | null;
          country: string | null;
          description: string | null;
          email: string | null;
          experience: string | null;
          facebook: string | null;
          first_name: string | null;
          gallery: string | null;
          gym_name: string | null;
          has_premium: boolean | null;
          id: string;
          instagram: string | null;
          joined: string;
          last_name: string | null;
          personal: string | null;
          phone: string | null;
          pro_type: string | null;
          profile_picture_url: string | null;
          state: string | null;
          street: string | null;
          street_number: string | null;
          twitter: string | null;
          type: Database['public']['Enums']['user_type'] | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          active_clients?: string | null;
          active_personal_trainers?: number | null;
          certificate?: boolean | null;
          city?: string | null;
          completed_clients?: string | null;
          country?: string | null;
          description?: string | null;
          email?: string | null;
          experience?: string | null;
          facebook?: string | null;
          first_name?: string | null;
          gallery?: string | null;
          gym_name?: string | null;
          has_premium?: boolean | null;
          id: string;
          instagram?: string | null;
          joined?: string;
          last_name?: string | null;
          personal?: string | null;
          phone?: string | null;
          pro_type?: string | null;
          profile_picture_url?: string | null;
          state?: string | null;
          street?: string | null;
          street_number?: string | null;
          twitter?: string | null;
          type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          active_clients?: string | null;
          active_personal_trainers?: number | null;
          certificate?: boolean | null;
          city?: string | null;
          completed_clients?: string | null;
          country?: string | null;
          description?: string | null;
          email?: string | null;
          experience?: string | null;
          facebook?: string | null;
          first_name?: string | null;
          gallery?: string | null;
          gym_name?: string | null;
          has_premium?: boolean | null;
          id?: string;
          instagram?: string | null;
          joined?: string;
          last_name?: string | null;
          personal?: string | null;
          phone?: string | null;
          pro_type?: string | null;
          profile_picture_url?: string | null;
          state?: string | null;
          street?: string | null;
          street_number?: string | null;
          twitter?: string | null;
          type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'gyms_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      nutritionists: {
        Row: {
          active_clients: string | null;
          birth_date: string | null;
          birth_month: string | null;
          birth_year: string | null;
          certificate: boolean | null;
          city: string | null;
          completed_clients: string | null;
          country: string | null;
          description: string | null;
          email: string | null;
          experience: string | null;
          facebook: string | null;
          first_name: string | null;
          gallery: string | null;
          gender: string | null;
          gym_name: string | null;
          has_premium: boolean | null;
          id: string;
          instagram: string | null;
          joined: string;
          last_name: string | null;
          phone: string | null;
          pro_type: string | null;
          profile_picture_url: string | null;
          programs: string | null;
          state: string | null;
          twitter: string | null;
          type: Database['public']['Enums']['user_type'] | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          active_clients?: string | null;
          birth_date?: string | null;
          birth_month?: string | null;
          birth_year?: string | null;
          certificate?: boolean | null;
          city?: string | null;
          completed_clients?: string | null;
          country?: string | null;
          description?: string | null;
          email?: string | null;
          experience?: string | null;
          facebook?: string | null;
          first_name?: string | null;
          gallery?: string | null;
          gender?: string | null;
          gym_name?: string | null;
          has_premium?: boolean | null;
          id: string;
          instagram?: string | null;
          joined?: string;
          last_name?: string | null;
          phone?: string | null;
          pro_type?: string | null;
          profile_picture_url?: string | null;
          programs?: string | null;
          state?: string | null;
          twitter?: string | null;
          type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          active_clients?: string | null;
          birth_date?: string | null;
          birth_month?: string | null;
          birth_year?: string | null;
          certificate?: boolean | null;
          city?: string | null;
          completed_clients?: string | null;
          country?: string | null;
          description?: string | null;
          email?: string | null;
          experience?: string | null;
          facebook?: string | null;
          first_name?: string | null;
          gallery?: string | null;
          gender?: string | null;
          gym_name?: string | null;
          has_premium?: boolean | null;
          id?: string;
          instagram?: string | null;
          joined?: string;
          last_name?: string | null;
          phone?: string | null;
          pro_type?: string | null;
          profile_picture_url?: string | null;
          programs?: string | null;
          state?: string | null;
          twitter?: string | null;
          type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'nutritionists_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      physical_details: {
        Row: {
          arm_left: number | null;
          arm_right: number | null;
          ass: number | null;
          back_photo: string | null;
          body_height: number | null;
          body_weight: number | null;
          chest: number | null;
          client_id: string | null;
          date_created: string;
          front_photo: string | null;
          hip: number | null;
          id: number;
          neck: number | null;
          shoulders: number | null;
          side_photo: string | null;
          thigh: number | null;
          waist: number | null;
        };
        Insert: {
          arm_left?: number | null;
          arm_right?: number | null;
          ass?: number | null;
          back_photo?: string | null;
          body_height?: number | null;
          body_weight?: number | null;
          chest?: number | null;
          client_id?: string | null;
          date_created?: string;
          front_photo?: string | null;
          hip?: number | null;
          id?: number;
          neck?: number | null;
          shoulders?: number | null;
          side_photo?: string | null;
          thigh?: number | null;
          waist?: number | null;
        };
        Update: {
          arm_left?: number | null;
          arm_right?: number | null;
          ass?: number | null;
          back_photo?: string | null;
          body_height?: number | null;
          body_weight?: number | null;
          chest?: number | null;
          client_id?: string | null;
          date_created?: string;
          front_photo?: string | null;
          hip?: number | null;
          id?: number;
          neck?: number | null;
          shoulders?: number | null;
          side_photo?: string | null;
          thigh?: number | null;
          waist?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'physical_details_client_id_fkey';
            columns: ['client_id'];
            referencedRelation: 'clients';
            referencedColumns: ['client_id'];
          },
        ];
      };
      prices: {
        Row: {
          active: boolean | null;
          currency: string | null;
          description: string | null;
          id: string;
          interval: Database['public']['Enums']['pricing_plan_interval'] | null;
          interval_count: number | null;
          metadata: Json | null;
          product_id: string | null;
          trial_period_days: number | null;
          type: Database['public']['Enums']['pricing_type'] | null;
          unit_amount: number | null;
        };
        Insert: {
          active?: boolean | null;
          currency?: string | null;
          description?: string | null;
          id: string;
          interval?:
            | Database['public']['Enums']['pricing_plan_interval']
            | null;
          interval_count?: number | null;
          metadata?: Json | null;
          product_id?: string | null;
          trial_period_days?: number | null;
          type?: Database['public']['Enums']['pricing_type'] | null;
          unit_amount?: number | null;
        };
        Update: {
          active?: boolean | null;
          currency?: string | null;
          description?: string | null;
          id?: string;
          interval?:
            | Database['public']['Enums']['pricing_plan_interval']
            | null;
          interval_count?: number | null;
          metadata?: Json | null;
          product_id?: string | null;
          trial_period_days?: number | null;
          type?: Database['public']['Enums']['pricing_type'] | null;
          unit_amount?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'prices_product_id_fkey';
            columns: ['product_id'];
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
        ];
      };
      products: {
        Row: {
          active: boolean | null;
          description: string | null;
          id: string;
          image: string | null;
          metadata: Json | null;
          name: string | null;
        };
        Insert: {
          active?: boolean | null;
          description?: string | null;
          id: string;
          image?: string | null;
          metadata?: Json | null;
          name?: string | null;
        };
        Update: {
          active?: boolean | null;
          description?: string | null;
          id?: string;
          image?: string | null;
          metadata?: Json | null;
          name?: string | null;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          beneficiary_id: string | null;
          client_first_name: string | null;
          client_id: string | null;
          client_last_name: string | null;
          client_photo: string | null;
          date_created: string | null;
          description: string | null;
          id: number;
          stars: number | null;
        };
        Insert: {
          beneficiary_id?: string | null;
          client_first_name?: string | null;
          client_id?: string | null;
          client_last_name?: string | null;
          client_photo?: string | null;
          date_created?: string | null;
          description?: string | null;
          id?: number;
          stars?: number | null;
        };
        Update: {
          beneficiary_id?: string | null;
          client_first_name?: string | null;
          client_id?: string | null;
          client_last_name?: string | null;
          client_photo?: string | null;
          date_created?: string | null;
          description?: string | null;
          id?: number;
          stars?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'reviews_beneficiary_id_fkey';
            columns: ['beneficiary_id'];
            referencedRelation: 'trainers';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'reviews_client_id_fkey';
            columns: ['client_id'];
            referencedRelation: 'clients';
            referencedColumns: ['client_id'];
          },
        ];
      };
      subscriptions: {
        Row: {
          cancel_at: string | null;
          cancel_at_period_end: boolean | null;
          canceled_at: string | null;
          created: string;
          current_period_end: string;
          current_period_start: string;
          ended_at: string | null;
          id: string;
          metadata: Json | null;
          price_id: string | null;
          quantity: number | null;
          status: Database['public']['Enums']['subscription_status'] | null;
          trial_end: string | null;
          trial_start: string | null;
          user_id: string;
        };
        Insert: {
          cancel_at?: string | null;
          cancel_at_period_end?: boolean | null;
          canceled_at?: string | null;
          created?: string;
          current_period_end?: string;
          current_period_start?: string;
          ended_at?: string | null;
          id: string;
          metadata?: Json | null;
          price_id?: string | null;
          quantity?: number | null;
          status?: Database['public']['Enums']['subscription_status'] | null;
          trial_end?: string | null;
          trial_start?: string | null;
          user_id: string;
        };
        Update: {
          cancel_at?: string | null;
          cancel_at_period_end?: boolean | null;
          canceled_at?: string | null;
          created?: string;
          current_period_end?: string;
          current_period_start?: string;
          ended_at?: string | null;
          id?: string;
          metadata?: Json | null;
          price_id?: string | null;
          quantity?: number | null;
          status?: Database['public']['Enums']['subscription_status'] | null;
          trial_end?: string | null;
          trial_start?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'subscriptions_price_id_fkey';
            columns: ['price_id'];
            referencedRelation: 'prices';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'subscriptions_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      trainers: {
        Row: {
          active_clients: string | null;
          birth_date: string | null;
          birth_month: string | null;
          birth_year: string | null;
          certificate: boolean | null;
          city: string | null;
          completed_clients: string | null;
          country: string | null;
          description: string | null;
          email: string | null;
          experience: string | null;
          facebook: string | null;
          first_name: string | null;
          gallery: string[] | null;
          gender: string | null;
          gym_name: string | null;
          has_premium: boolean | null;
          id: string;
          instagram: string | null;
          joined: string;
          last_name: string | null;
          phone: string | null;
          pro_type: string | null;
          profile_picture_url: string | null;
          state: string | null;
          twitter: string | null;
          type: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          active_clients?: string | null;
          birth_date?: string | null;
          birth_month?: string | null;
          birth_year?: string | null;
          certificate?: boolean | null;
          city?: string | null;
          completed_clients?: string | null;
          country?: string | null;
          description?: string | null;
          email?: string | null;
          experience?: string | null;
          facebook?: string | null;
          first_name?: string | null;
          gallery?: string[] | null;
          gender?: string | null;
          gym_name?: string | null;
          has_premium?: boolean | null;
          id: string;
          instagram?: string | null;
          joined?: string;
          last_name?: string | null;
          phone?: string | null;
          pro_type?: string | null;
          profile_picture_url?: string | null;
          state?: string | null;
          twitter?: string | null;
          type?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          active_clients?: string | null;
          birth_date?: string | null;
          birth_month?: string | null;
          birth_year?: string | null;
          certificate?: boolean | null;
          city?: string | null;
          completed_clients?: string | null;
          country?: string | null;
          description?: string | null;
          email?: string | null;
          experience?: string | null;
          facebook?: string | null;
          first_name?: string | null;
          gallery?: string[] | null;
          gender?: string | null;
          gym_name?: string | null;
          has_premium?: boolean | null;
          id?: string;
          instagram?: string | null;
          joined?: string;
          last_name?: string | null;
          phone?: string | null;
          pro_type?: string | null;
          profile_picture_url?: string | null;
          state?: string | null;
          twitter?: string | null;
          type?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'trainers_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      usernames: {
        Row: {
          created_at: string | null;
          id: string;
          username: string | null;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          username?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'usernames_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          billing_address: Json | null;
          email: string | null;
          first_name: string | null;
          id: string;
          last_name: string | null;
          name: string | null;
          payment_method: Json | null;
          profile_picture_url: string | null;
          user_type: Database['public']['Enums']['user_type'] | null;
          username: string | null;
        };
        Insert: {
          billing_address?: Json | null;
          email?: string | null;
          first_name?: string | null;
          id: string;
          last_name?: string | null;
          name?: string | null;
          payment_method?: Json | null;
          profile_picture_url?: string | null;
          user_type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
        };
        Update: {
          billing_address?: Json | null;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          name?: string | null;
          payment_method?: Json | null;
          profile_picture_url?: string | null;
          user_type?: Database['public']['Enums']['user_type'] | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
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
      gender_type: 'masculin' | 'feminin' | 'altul';
      pricing_plan_interval: 'day' | 'week' | 'month' | 'year';
      pricing_type: 'one_time' | 'recurring';
      subscription_status:
        | 'trialing'
        | 'active'
        | 'canceled'
        | 'incomplete'
        | 'incomplete_expired'
        | 'past_due'
        | 'unpaid';
      user_type: 'client' | 'nutritionist' | 'trainer' | 'gym';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
