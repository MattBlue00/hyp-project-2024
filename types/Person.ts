/**
 * Person database type shortcut.
 */
import { type Database } from './schema';
export type Person = Database['public']['Tables']['Person']['Row'];