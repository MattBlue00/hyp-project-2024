/**
 * Project database type shortcut.
 */
import { type Database } from './schema';
export type Project = Database['public']['Tables']['Project']['Row'];