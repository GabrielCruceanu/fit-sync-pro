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
      cities: {
        Row: {
          country: string | null
          geonameid: number
          name: string | null
          subcountry: string | null
        }
        Insert: {
          country?: string | null
          geonameid?: number
          name?: string | null
          subcountry?: string | null
        }
        Update: {
          country?: string | null
          geonameid?: number
          name?: string | null
          subcountry?: string | null
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
          foodPreferences: string[] | null
          gender: Database["public"]["Enums"]["gender_type"] | null
          goals: string[] | null
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
          foodPreferences?: string[] | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          goals?: string[] | null
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
          foodPreferences?: string[] | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          goals?: string[] | null
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
          },
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
          },
        ]
      }
      gyms: {
        Row: {
          activePersonalTrainers: number | null
          biography: string | null
          certificate: boolean | null
          city: string | null
          country: string | null
          email: string | null
          facebook: string | null
          gallery: string[] | null
          gymName: string | null
          gymType: Database["public"]["Enums"]["gym_type"] | null
          hasPremium: boolean | null
          id: string
          instagram: string | null
          joined: string
          phoneNumber: string | null
          profilePictureUrl: string | null
          state: string | null
          street: string | null
          twitter: string | null
          type: Database["public"]["Enums"]["user_type"] | null
          username: string | null
          website: string | null
        }
        Insert: {
          activePersonalTrainers?: number | null
          biography?: string | null
          certificate?: boolean | null
          city?: string | null
          country?: string | null
          email?: string | null
          facebook?: string | null
          gallery?: string[] | null
          gymName?: string | null
          gymType?: Database["public"]["Enums"]["gym_type"] | null
          hasPremium?: boolean | null
          id: string
          instagram?: string | null
          joined?: string
          phoneNumber?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          street?: string | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          activePersonalTrainers?: number | null
          biography?: string | null
          certificate?: boolean | null
          city?: string | null
          country?: string | null
          email?: string | null
          facebook?: string | null
          gallery?: string[] | null
          gymName?: string | null
          gymType?: Database["public"]["Enums"]["gym_type"] | null
          hasPremium?: boolean | null
          id?: string
          instagram?: string | null
          joined?: string
          phoneNumber?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          street?: string | null
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
          },
        ]
      }
      nutritionists: {
        Row: {
          activeClients: string | null
          biography: string | null
          birthDate: string | null
          birthMonth: string | null
          birthYear: string | null
          cabinetName: string | null
          cabinetStreet: string | null
          certificate: boolean | null
          city: string | null
          completedClients: string | null
          country: string | null
          email: string | null
          facebook: string | null
          firstName: string | null
          gallery: string[] | null
          gender: Database["public"]["Enums"]["gender_type"] | null
          hasPremium: boolean | null
          id: string
          instagram: string | null
          joined: string
          lastName: string | null
          nutritionAvailabilityDays: string[] | null
          nutritionAvailabilityTime: string[] | null
          nutritionistDiets: string | null
          nutritionistExperience: string | null
          nutritionistType:
            | Database["public"]["Enums"]["nutritionist_type"]
            | null
          nutritionLocation: string | null
          nutritionOnlinePreferences: string | null
          nutritionPhysicalPreferences: string | null
          phoneNumber: string | null
          profilePictureUrl: string | null
          state: string | null
          twitter: string | null
          type: Database["public"]["Enums"]["user_type"] | null
          username: string | null
          website: string | null
        }
        Insert: {
          activeClients?: string | null
          biography?: string | null
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          cabinetName?: string | null
          cabinetStreet?: string | null
          certificate?: boolean | null
          city?: string | null
          completedClients?: string | null
          country?: string | null
          email?: string | null
          facebook?: string | null
          firstName?: string | null
          gallery?: string[] | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          hasPremium?: boolean | null
          id: string
          instagram?: string | null
          joined?: string
          lastName?: string | null
          nutritionAvailabilityDays?: string[] | null
          nutritionAvailabilityTime?: string[] | null
          nutritionistDiets?: string | null
          nutritionistExperience?: string | null
          nutritionistType?:
            | Database["public"]["Enums"]["nutritionist_type"]
            | null
          nutritionLocation?: string | null
          nutritionOnlinePreferences?: string | null
          nutritionPhysicalPreferences?: string | null
          phoneNumber?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          activeClients?: string | null
          biography?: string | null
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          cabinetName?: string | null
          cabinetStreet?: string | null
          certificate?: boolean | null
          city?: string | null
          completedClients?: string | null
          country?: string | null
          email?: string | null
          facebook?: string | null
          firstName?: string | null
          gallery?: string[] | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          hasPremium?: boolean | null
          id?: string
          instagram?: string | null
          joined?: string
          lastName?: string | null
          nutritionAvailabilityDays?: string[] | null
          nutritionAvailabilityTime?: string[] | null
          nutritionistDiets?: string | null
          nutritionistExperience?: string | null
          nutritionistType?:
            | Database["public"]["Enums"]["nutritionist_type"]
            | null
          nutritionLocation?: string | null
          nutritionOnlinePreferences?: string | null
          nutritionPhysicalPreferences?: string | null
          phoneNumber?: string | null
          profilePictureUrl?: string | null
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
          },
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
          },
        ]
      }
      profiles: {
        Row: {
          bio: string | null
          contact_info: Json | null
          created_at: string | null
          customer_id: string | null
          full_name: string
          has_access: boolean | null
          id: string
          location: string | null
          preferences: Json | null
          price_id: string | null
          profile_picture_url: string | null
          updated_at: string | null
          user_id: string
          username: string
        }
        Insert: {
          bio?: string | null
          contact_info?: Json | null
          created_at?: string | null
          customer_id?: string | null
          full_name: string
          has_access?: boolean | null
          id?: string
          location?: string | null
          preferences?: Json | null
          price_id?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          user_id: string
          username: string
        }
        Update: {
          bio?: string | null
          contact_info?: Json | null
          created_at?: string | null
          customer_id?: string | null
          full_name?: string
          has_access?: boolean | null
          id?: string
          location?: string | null
          preferences?: Json | null
          price_id?: string | null
          profile_picture_url?: string | null
          updated_at?: string | null
          user_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
          },
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
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      trainers: {
        Row: {
          activeClients: string | null
          biography: string | null
          birthDate: string | null
          birthMonth: string | null
          birthYear: string | null
          certificate: boolean | null
          city: string | null
          completedClients: string | null
          country: string | null
          email: string | null
          facebook: string | null
          firstName: string | null
          gallery: string[] | null
          gender: Database["public"]["Enums"]["gender_type"] | null
          gymName: string | null
          gymStreet: string | null
          hasPremium: boolean | null
          id: string
          instagram: string | null
          isNutritionist: boolean | null
          joined: string
          lastName: string | null
          nutritionistDiets: string[] | null
          nutritionistExperience: string | null
          nutritionistType:
            | Database["public"]["Enums"]["nutritionist_type"]
            | null
          phoneNumber: string | null
          profilePictureUrl: string | null
          state: string | null
          trainerType: Database["public"]["Enums"]["trainer_type"] | null
          trainingAvailabilityDays: string[] | null
          trainingAvailabilityTime: string[] | null
          trainingExperience: string | null
          trainingLocation: string[] | null
          trainingOnlinePreferences: string[] | null
          trainingPhysicalPreferences: string[] | null
          twitter: string | null
          type: Database["public"]["Enums"]["user_type"] | null
          username: string | null
          website: string | null
        }
        Insert: {
          activeClients?: string | null
          biography?: string | null
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          certificate?: boolean | null
          city?: string | null
          completedClients?: string | null
          country?: string | null
          email?: string | null
          facebook?: string | null
          firstName?: string | null
          gallery?: string[] | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          gymName?: string | null
          gymStreet?: string | null
          hasPremium?: boolean | null
          id: string
          instagram?: string | null
          isNutritionist?: boolean | null
          joined?: string
          lastName?: string | null
          nutritionistDiets?: string[] | null
          nutritionistExperience?: string | null
          nutritionistType?:
            | Database["public"]["Enums"]["nutritionist_type"]
            | null
          phoneNumber?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          trainerType?: Database["public"]["Enums"]["trainer_type"] | null
          trainingAvailabilityDays?: string[] | null
          trainingAvailabilityTime?: string[] | null
          trainingExperience?: string | null
          trainingLocation?: string[] | null
          trainingOnlinePreferences?: string[] | null
          trainingPhysicalPreferences?: string[] | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
          username?: string | null
          website?: string | null
        }
        Update: {
          activeClients?: string | null
          biography?: string | null
          birthDate?: string | null
          birthMonth?: string | null
          birthYear?: string | null
          certificate?: boolean | null
          city?: string | null
          completedClients?: string | null
          country?: string | null
          email?: string | null
          facebook?: string | null
          firstName?: string | null
          gallery?: string[] | null
          gender?: Database["public"]["Enums"]["gender_type"] | null
          gymName?: string | null
          gymStreet?: string | null
          hasPremium?: boolean | null
          id?: string
          instagram?: string | null
          isNutritionist?: boolean | null
          joined?: string
          lastName?: string | null
          nutritionistDiets?: string[] | null
          nutritionistExperience?: string | null
          nutritionistType?:
            | Database["public"]["Enums"]["nutritionist_type"]
            | null
          phoneNumber?: string | null
          profilePictureUrl?: string | null
          state?: string | null
          trainerType?: Database["public"]["Enums"]["trainer_type"] | null
          trainingAvailabilityDays?: string[] | null
          trainingAvailabilityTime?: string[] | null
          trainingExperience?: string | null
          trainingLocation?: string[] | null
          trainingOnlinePreferences?: string[] | null
          trainingPhysicalPreferences?: string[] | null
          twitter?: string | null
          type?: Database["public"]["Enums"]["user_type"] | null
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
          },
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
          },
        ]
      }
      users: {
        Row: {
          billingAddress: Json | null
          createdAt: string | null
          email: string | null
          firstName: string | null
          gallery: string[] | null
          hasOnboarding: boolean
          id: string
          lastLogin: string | null
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
          createdAt?: string | null
          email?: string | null
          firstName?: string | null
          gallery?: string[] | null
          hasOnboarding?: boolean
          id: string
          lastLogin?: string | null
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
          createdAt?: string | null
          email?: string | null
          firstName?: string | null
          gallery?: string[] | null
          hasOnboarding?: boolean
          id?: string
          lastLogin?: string | null
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
      gender_type: "male" | "female" | "other"
      gym_type:
        | "Fitness Center"
        | "Health Club"
        | "Boutique Gym"
        | "CrossFit Box"
        | "Yoga Studio"
        | "Pilates Studio"
        | "Martial Arts Gym"
        | "Swimming Pool"
        | "Sports Complex"
        | "Community Center"
        | "Corporate Gym"
        | "Hotel Gym"
        | "Outdoor Fitness Facility"
        | "Virtual Gym"
        | "Other"
      nutritionist_type:
        | "Registered Dietitian"
        | "Sports Nutritionist"
        | "Clinical Nutritionist"
        | "Weight Loss Specialist"
        | "Holistic Nutritionist"
        | "Functional Nutritionist"
        | "Nutritional Therapist"
        | "Gut Health Specialist"
        | "Plant-Based Nutritionist"
        | "Eating Disorder Specialist"
        | "Child Nutritionist"
        | "Prenatal Nutritionist"
        | "Postnatal Nutritionist"
        | "Online Nutritionist"
        | "Other"
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
      trainer_type:
        | "Personal Trainer"
        | "Strength Coach"
        | "Yoga Instructor"
        | "Pilates Instructor"
        | "CrossFit Coach"
        | "Group Fitness Instructor"
        | "Athletic Trainer"
        | "Nutrition Coach"
        | "Rehabilitation Specialist"
        | "Martial Arts Instructor"
        | "Dance Instructor"
        | "Sports Conditioning Coach"
        | "Cycling Instructor"
        | "Running Coach"
        | "Swimming Instructor"
        | "Bootcamp Instructor"
        | "Functional Fitness Trainer"
        | "Wellness Coach"
        | "Bodybuilding Coach"
        | "Online Coach"
        | "Other"
      user_type: "client" | "nutritionist" | "trainer" | "gym"
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
