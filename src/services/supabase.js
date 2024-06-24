import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ctoljreetwmubloaxnrl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0b2xqcmVldHdtdWJsb2F4bnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MzcyMjMsImV4cCI6MjAyNTIxMzIyM30.TGSagW_c9oCkNpbgP_TMQOlbKNYhBW3HSZkT5s_fGFA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
