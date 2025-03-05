import { useAuth } from '@clerk/clerk-react';
import { supabase } from './supabase';

export const useSupabaseAuth = () => {
  const { getToken } = useAuth();

  const getSupabaseClient = async () => {
    try {
      const token = await getToken({ template: 'supabase' });
      
      if (!token) {
        throw new Error('No authentication token available');
      }

      await supabase.auth.setSession({
        access_token: token,
        refresh_token: ''
      });

      return supabase;
    } catch (error) {
      console.error('Error setting up Supabase client:', error);
      throw error;
    }
  };

  return { getSupabaseClient };
};
