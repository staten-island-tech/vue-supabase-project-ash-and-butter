
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://pqnmoywvsreevugtjfhz.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxbm1veXd2c3JlZXZ1Z3RqZmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2Njc3MjQsImV4cCI6MjAyODI0MzcyNH0.DHDij1J6m0K_fOs4nE7fKUj8pyQ5i-ZAWw2j1PKfGW0
export const supabase = createClient(supabaseUrl, supabaseKey)
