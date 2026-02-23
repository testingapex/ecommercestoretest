import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://kdrsgxvdciklykmbodaa.supabase.co";

const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkcnNneHZkY2lrbHlrbWJvZGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4ODE1NTQsImV4cCI6MjA4NzQ1NzU1NH0.KWPiblXfP4wfWh3WpPJi8b3HaBRmlKifhfa9GcUpH6Y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
