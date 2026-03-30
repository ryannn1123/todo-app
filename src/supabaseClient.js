import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jvrsxiinldxansdumqdk.supabase.co";
const supabaseAnonKey = "sb_publishable_j096vRBVFV5eV1kNNfe7iw_o1DZHxU0";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);