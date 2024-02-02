export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      alergii_alimentare: {
        Row: {
          alimente_sigure: string | null
          exemplu_alimente_asociate: string | null
          id: number
          tip_alergie: Database["public"]["Enums"]["tip_alergie_enum"] | null
        }
        Insert: {
          alimente_sigure?: string | null
          exemplu_alimente_asociate?: string | null
          id: number
          tip_alergie?: Database["public"]["Enums"]["tip_alergie_enum"] | null
        }
        Update: {
          alimente_sigure?: string | null
          exemplu_alimente_asociate?: string | null
          id?: number
          tip_alergie?: Database["public"]["Enums"]["tip_alergie_enum"] | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          birthDate: string | null
          birthMonth: string | null
          birthYear: string | null
          city: string | null
          client_id: string
          country: string | null
          email: string | null
          firstName: string | null
          fitnessExperience: string | null
          foodAllergiesDescription: string | null
          foodAllergiesType: string | null
          foodPreferences: string | null
          gender: string | null
          goals: string | null
          haveFoodAllergies: boolean | null
          height: number | null
          joined: string
          lastName: string | null
          phone: string | null
          profilePictureUrl: string | null
          state: string | null
          trainingAvailabilityDays: string[] | null
          trainingAvailabilityTime: string[] | null
          trainingLocation: string | null
          trainingOnlinePreferences: string | null
          trainingPhysicalPreferences: string | null
          username: string | null
          userType: Database["public"]["Enums"]["user_type"] | null
          weight: number | null
        }
        Insert: {
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          city?: string | null
          client_id: string
          country?: string | null
          email?: string | null
          firstName?: string | null
          fitnessExperience?: string | null
          foodAllergiesDescription?: string | null
          foodAllergiesType?: string | null
          foodPreferences?: string | null
          gender?: string | null
          goals?: string | null
          haveFoodAllergies?: boolean | null
          height?: number | null
          joined?: string
          lastName?: string | null
          phone?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          trainingAvailabilityDays?: string[] | null
          trainingAvailabilityTime?: string[] | null
          trainingLocation?: string | null
          trainingOnlinePreferences?: string | null
          trainingPhysicalPreferences?: string | null
          username?: string | null
          userType?: Database["public"]["Enums"]["user_type"] | null
          weight?: number | null
        }
        Update: {
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          city?: string | null
          client_id?: string
          country?: string | null
          email?: string | null
          firstName?: string | null
          fitnessExperience?: string | null
          foodAllergiesDescription?: string | null
          foodAllergiesType?: string | null
          foodPreferences?: string | null
          gender?: string | null
          goals?: string | null
          haveFoodAllergies?: boolean | null
          height?: number | null
          joined?: string
          lastName?: string | null
          phone?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          trainingAvailabilityDays?: string[] | null
          trainingAvailabilityTime?: string[] | null
          trainingLocation?: string | null
          trainingOnlinePreferences?: string | null
          trainingPhysicalPreferences?: string | null
          username?: string | null
          userType?: Database["public"]["Enums"]["user_type"] | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
          }
        ]
      }
      gyms: {
        Row: {
          active_clients: string | null
          active_personal_trainers: number | null
          certificate: boolean | null
          city: string | null
          completed_clients: string | null
          country: string | null
          description: string | null
          email: string | null
          experience: string | null
          facebook: string | null
          first_name: string | null
          gallery: string | null
          gym_name: string | null
          has_premium: boolean | null
          id: string
          instagram: string | null
          joined: string
          last_name: string | null
          personal: string | null
          phone: string | null
          pro_type: string | null
          profile_picture_url: string | null
          state: string | null
          street: string | null
          street_number: string | null
          twitter: string | null
          type: Database["public"]["Enums"]["user_type"] | null
          username: string | null
          website: string | null
        }
        Insert: {
          active_clients?: string | null
          active_personal_trainers?: number | null
          certificate?: boolean | null
          city?: string | null
          completed_clients?: string | null
          country?: string | null
          description?: string | null
          email?: string | null
          experience?: string | null
          facebook?: string | null
          first_name?: string | null
          gallery?: string | null
          gym_name?: string | null
          has_premium?: boolean | null
          id: string
          instagram?: string | null
          joined?: string
          last_name?: string | null
          personal?: string | null
          phone?: string | null
          pro_type?: string | null
          profile_picture_url?: string | null
          state?: string | null
          street?: string | null
          street_number?: string | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          active_clients?: string | null
          active_personal_trainers?: number | null
          certificate?: boolean | null
          city?: string | null
          completed_clients?: string | null
          country?: string | null
          description?: string | null
          email?: string | null
          experience?: string | null
          facebook?: string | null
          first_name?: string | null
          gallery?: string | null
          gym_name?: string | null
          has_premium?: boolean | null
          id?: string
          instagram?: string | null
          joined?: string
          last_name?: string | null
          personal?: string | null
          phone?: string | null
          pro_type?: string | null
          profile_picture_url?: string | null
          state?: string | null
          street?: string | null
          street_number?: string | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gyms_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      nutritionists: {
        Row: {
          active_clients: string | null
          birth_date: string | null
          birth_month: string | null
          birth_year: string | null
          certificate: boolean | null
          city: string | null
          completed_clients: string | null
          country: string | null
          description: string | null
          email: string | null
          experience: string | null
          facebook: string | null
          first_name: string | null
          gallery: string | null
          gender: string | null
          gym_name: string | null
          has_premium: boolean | null
          id: string
          instagram: string | null
          joined: string
          last_name: string | null
          phone: string | null
          pro_type: string | null
          profile_picture_url: string | null
          programs: string | null
          state: string | null
          twitter: string | null
          type: Database["public"]["Enums"]["user_type"] | null
          username: string | null
          website: string | null
        }
        Insert: {
          active_clients?: string | null
          birth_date?: string | null
          birth_month?: string | null
          birth_year?: string | null
          certificate?: boolean | null
          city?: string | null
          completed_clients?: string | null
          country?: string | null
          description?: string | null
          email?: string | null
          experience?: string | null
          facebook?: string | null
          first_name?: string | null
          gallery?: string | null
          gender?: string | null
          gym_name?: string | null
          has_premium?: boolean | null
          id: string
          instagram?: string | null
          joined?: string
          last_name?: string | null
          phone?: string | null
          pro_type?: string | null
          profile_picture_url?: string | null
          programs?: string | null
          state?: string | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          active_clients?: string | null
          birth_date?: string | null
          birth_month?: string | null
          birth_year?: string | null
          certificate?: boolean | null
          city?: string | null
          completed_clients?: string | null
          country?: string | null
          description?: string | null
          email?: string | null
          experience?: string | null
          facebook?: string | null
          first_name?: string | null
          gallery?: string | null
          gender?: string | null
          gym_name?: string | null
          has_premium?: boolean | null
          id?: string
          instagram?: string | null
          joined?: string
          last_name?: string | null
          phone?: string | null
          pro_type?: string | null
          profile_picture_url?: string | null
          programs?: string | null
          state?: string | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nutritionists_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      physical_details: {
        Row: {
          arm_left: number | null
          arm_right: number | null
          ass: number | null
          back_photo: string | null
          body_height: number | null
          body_weight: number | null
          chest: number | null
          client_id: string | null
          date_created: string
          front_photo: string | null
          hip: number | null
          id: number
          neck: number | null
          shoulders: number | null
          side_photo: string | null
          thigh: number | null
          waist: number | null
        }
        Insert: {
          arm_left?: number | null
          arm_right?: number | null
          ass?: number | null
          back_photo?: string | null
          body_height?: number | null
          body_weight?: number | null
          chest?: number | null
          client_id?: string | null
          date_created?: string
          front_photo?: string | null
          hip?: number | null
          id?: number
          neck?: number | null
          shoulders?: number | null
          side_photo?: string | null
          thigh?: number | null
          waist?: number | null
        }
        Update: {
          arm_left?: number | null
          arm_right?: number | null
          ass?: number | null
          back_photo?: string | null
          body_height?: number | null
          body_weight?: number | null
          chest?: number | null
          client_id?: string | null
          date_created?: string
          front_photo?: string | null
          hip?: number | null
          id?: number
          neck?: number | null
          shoulders?: number | null
          side_photo?: string | null
          thigh?: number | null
          waist?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "physical_details_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["client_id"]
          }
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          beneficiary_id: string | null
          client_first_name: string | null
          client_id: string | null
          client_last_name: string | null
          client_photo: string | null
          date_created: string | null
          description: string | null
          id: number
          stars: number | null
        }
        Insert: {
          beneficiary_id?: string | null
          client_first_name?: string | null
          client_id?: string | null
          client_last_name?: string | null
          client_photo?: string | null
          date_created?: string | null
          description?: string | null
          id?: number
          stars?: number | null
        }
        Update: {
          beneficiary_id?: string | null
          client_first_name?: string | null
          client_id?: string | null
          client_last_name?: string | null
          client_photo?: string | null
          date_created?: string | null
          description?: string | null
          id?: number
          stars?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_beneficiary_id_fkey"
            columns: ["beneficiary_id"]
            isOneToOne: false
            referencedRelation: "trainers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["client_id"]
          }
        ]
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
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      trainers: {
        Row: {
          activeCients: string | null
          birthDate: string | null
          birthMonth: string | null
          birthYear: string | null
          certificate: boolean | null
          city: string | null
          completedClients: string | null
          country: string | null
          description: string | null
          email: string | null
          facebook: string | null
          firstName: string | null
          gallery: string[] | null
          gender: string | null
          gymName: string | null
          hasPremium: boolean | null
          id: string
          instagram: string | null
          isNutritionist: boolean | null
          joined: string
          lastName: string | null
          nutritionistDiets: string[] | null
          nutritionistExperience: string | null
          nutritionistType: string | null
          phoneNumber: string | null
          profilePictureUrl: string | null
          state: string | null
          trainerType: string | null
          trainingAvailabilityDays: string[] | null
          trainingAvailabilityTime: string[] | null
          trainingExperience: string | null
          trainingLocation: string[] | null
          trainingOnlinePreferences: string[] | null
          trainingPhysicalPreferences: string[] | null
          twitter: string | null
          type: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          activeCients?: string | null
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          certificate?: boolean | null
          city?: string | null
          completedClients?: string | null
          country?: string | null
          description?: string | null
          email?: string | null
          facebook?: string | null
          firstName?: string | null
          gallery?: string[] | null
          gender?: string | null
          gymName?: string | null
          hasPremium?: boolean | null
          id: string
          instagram?: string | null
          isNutritionist?: boolean | null
          joined?: string
          lastName?: string | null
          nutritionistDiets?: string[] | null
          nutritionistExperience?: string | null
          nutritionistType?: string | null
          phoneNumber?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          trainerType?: string | null
          trainingAvailabilityDays?: string[] | null
          trainingAvailabilityTime?: string[] | null
          trainingExperience?: string | null
          trainingLocation?: string[] | null
          trainingOnlinePreferences?: string[] | null
          trainingPhysicalPreferences?: string[] | null
          twitter?: string | null
          type?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          activeCients?: string | null
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          certificate?: boolean | null
          city?: string | null
          completedClients?: string | null
          country?: string | null
          description?: string | null
          email?: string | null
          facebook?: string | null
          firstName?: string | null
          gallery?: string[] | null
          gender?: string | null
          gymName?: string | null
          hasPremium?: boolean | null
          id?: string
          instagram?: string | null
          isNutritionist?: boolean | null
          joined?: string
          lastName?: string | null
          nutritionistDiets?: string[] | null
          nutritionistExperience?: string | null
          nutritionistType?: string | null
          phoneNumber?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          trainerType?: string | null
          trainingAvailabilityDays?: string[] | null
          trainingAvailabilityTime?: string[] | null
          trainingExperience?: string | null
          trainingLocation?: string[] | null
          trainingOnlinePreferences?: string[] | null
          trainingPhysicalPreferences?: string[] | null
          twitter?: string | null
          type?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "trainers_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      usernames: {
        Row: {
          created_at: string | null
          id: string
          username: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          username?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "usernames_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          billingAddress: Json | null
          email: string | null
          firstName: string | null
          hasOnboarding: boolean
          id: string
          lastName: string | null
          name: string | null
          newsAndActualizations: boolean | null
          notificationsNutrition: boolean | null
          notificationsWorkout: boolean | null
          offersAndPromotions: boolean | null
          paymentMethod: Json | null
          profilePictureUrl: string | null
          username: string | null
          userType: Database["public"]["Enums"]["user_type"] | null
        }
        Insert: {
          billingAddress?: Json | null
          email?: string | null
          firstName?: string | null
          hasOnboarding?: boolean
          id: string
          lastName?: string | null
          name?: string | null
          newsAndActualizations?: boolean | null
          notificationsNutrition?: boolean | null
          notificationsWorkout?: boolean | null
          offersAndPromotions?: boolean | null
          paymentMethod?: Json | null
          profilePictureUrl?: string | null
          username?: string | null
          userType?: Database["public"]["Enums"]["user_type"] | null
        }
        Update: {
          billingAddress?: Json | null
          email?: string | null
          firstName?: string | null
          hasOnboarding?: boolean
          id?: string
          lastName?: string | null
          name?: string | null
          newsAndActualizations?: boolean | null
          notificationsNutrition?: boolean | null
          notificationsWorkout?: boolean | null
          offersAndPromotions?: boolean | null
          paymentMethod?: Json | null
          profilePictureUrl?: string | null
          username?: string | null
          userType?: Database["public"]["Enums"]["user_type"] | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
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
      gender_type: "masculin" | "feminin" | "altul"
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
      tip_alergie_enum:
        | "Cereale care contin gluten"
        | "Crustacee"
        | "Ouă"
        | "Pește"
        | "Arahide"
        | "Soia"
        | "Lapte și produse derivate inclusiv lactoza"
        | "Fructe cu coajă"
        | "Muștar și produse derivate"
        | "Seminţe de susan și produse derivate"
        | "Dioxid de sulf și sulfiţi"
        | "Lupin și produse derivate"
        | "Moluște și produse derivate"
        | "Telina și produse derivate"
        | "Altele"
      user_type: "client" | "nutritionist" | "trainer" | "gym"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
