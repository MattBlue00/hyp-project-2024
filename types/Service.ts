/**
 * Service database type shortcut.
 */
import { type Database } from './schema';
export type Service = Database['public']['Tables']['Service']['Row'];