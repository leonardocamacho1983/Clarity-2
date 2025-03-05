import { useState, useCallback } from 'react';
import { useSupabaseAuth } from '../lib/auth';
import { queries } from '../lib/supabase';
import type { Database } from '../types/supabase';

export const useSupabase = () => {
  const { getSupabaseClient } = useSupabaseAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handleQuery = async <T,>(queryFn: () => Promise<T>): Promise<T | null> => {
    setIsLoading(true);
    setError(null);
    
    try {
      await getSupabaseClient(); // Ensure auth is set up
      const result = await queryFn();
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('An unexpected error occurred');
      setError(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getJournalEntries = useCallback((
    userId: string,
    page?: number,
    limit?: number
  ) => {
    return handleQuery(() => queries.journalEntries.getByUserId(userId, page, limit));
  }, []);

  const createJournalEntry = useCallback((
    entry: Database['public']['Tables']['journal_entries']['Insert']
  ) => {
    return handleQuery(() => queries.journalEntries.create(entry));
  }, []);

  const updateJournalEntry = useCallback((
    id: string,
    updates: Partial<Database['public']['Tables']['journal_entries']['Update']>
  ) => {
    return handleQuery(() => queries.journalEntries.update(id, updates));
  }, []);

  return {
    isLoading,
    error,
    getJournalEntries,
    createJournalEntry,
    updateJournalEntry
  };
};
