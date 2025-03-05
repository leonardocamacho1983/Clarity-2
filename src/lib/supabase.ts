import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

// Add connection pooling configuration
export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  global: {
    headers: { 'x-application-name': 'clarity-journal' }
  }
});

// Add error handling wrapper
export const handleSupabaseError = (error: any): never => {
  console.error('Supabase Error:', error);
  throw new Error(error?.message || 'An unexpected error occurred');
};

// Add typed query helpers
export const queries = {
  users: {
    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) handleSupabaseError(error);
      return data;
    },
    
    updatePlan: async (id: string, plan: Database['public']['Enums']['user_plan']) => {
      const { data, error } = await supabase
        .from('users')
        .update({ plan })
        .eq('id', id)
        .select()
        .single();
      
      if (error) handleSupabaseError(error);
      return data;
    }
  },
  
  journalEntries: {
    getByUserId: async (userId: string, page = 1, limit = 10) => {
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      
      const { data, error, count } = await supabase
        .from('journal_entries')
        .select('*', { count: 'exact' })
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .range(from, to);
      
      if (error) handleSupabaseError(error);
      return { data, count };
    },
    
    create: async (entry: Database['public']['Tables']['journal_entries']['Insert']) => {
      const { data, error } = await supabase
        .from('journal_entries')
        .insert(entry)
        .select()
        .single();
      
      if (error) handleSupabaseError(error);
      return data;
    },
    
    update: async (
      id: string,
      updates: Partial<Database['public']['Tables']['journal_entries']['Update']>
    ) => {
      const { data, error } = await supabase
        .from('journal_entries')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) handleSupabaseError(error);
      return data;
    }
  }
};

export const testConnection = async () => {
  const startTime = Date.now();
  
  try {
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(0);

    const latency = Date.now() - startTime;

    if (error) {
      return {
        success: false,
        latency,
        error: error.message
      };
    }

    return {
      success: true,
      latency,
      message: 'Connection successful with read permissions verified.'
    };
  } catch (err) {
    return {
      success: false,
      latency: Date.now() - startTime,
      error: err instanceof Error ? err.message : 'Unknown error occurred'
    };
  }
};
