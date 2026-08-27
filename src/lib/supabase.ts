import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://cwvfgxdhearouclomjeq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_xkeb5PPKakTH5qQvPQllBA_eZDAHqKK';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SubscriptionRecord {
  id: string;
  customer_name: string;
  whatsapp: string;
  email?: string;
  platform: 'Xbox PC Game Pass' | 'NVIDIA GeForce NOW (Performance)' | 'NVIDIA GeForce NOW (Ultimate)' | string;
  duration_months: number;
  purchase_date: string;
  expiry_date: string;
  amount_paid: number;
  payment_proof_url?: string;
  payment_reference?: string;
  profile_slot?: string;
  profile_pin?: string;
  status: 'active' | 'expiring_soon' | 'expired' | 'pending_verification';
  notes?: string;
  created_at: string;
  updated_at: string;
}
