import { createClient } from "@supabase/supabase-js";
//Project id cmzwhokfwgqwxsoahefb

export const supabaseUrl = "https://cmzwhokfwgqwxsoahefb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtendob2tmd2dxd3hzb2FoZWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxODU2MzMsImV4cCI6MjA1NDc2MTYzM30.bvBak_ToSn6I1dGpnhyP3lnoLY6bfV785yTjPEuEeiE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
