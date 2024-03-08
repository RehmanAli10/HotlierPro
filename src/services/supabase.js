import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qmvjypeipqbpnncisbqf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtdmp5cGVpcHFicG5uY2lzYnFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3OTAyNDksImV4cCI6MjAyNTM2NjI0OX0.Y1ZJ95YIACdtRqvoW4Dc4bulYVwmotmy-7dIn6b2VeI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
