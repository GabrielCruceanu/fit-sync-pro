import { Reviews } from "@/ts/types/review";
import { TypedSupabaseClient } from "@/ts/types";

export const getReviewsByBeneficiaryId = async (
  beneficiaryId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("beneficiary_id", beneficiaryId);

  if (error) {
    console.log("select reviews by beneficiary id error: ", error.message);
  }

  return reviews as unknown as Reviews;
};

export const getReviewsByClientId = async (
  clientId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("client_id", clientId);

  if (error) {
    console.log("select reviews by client id error: ", error.message);
  }

  return reviews as unknown as Reviews;
};
