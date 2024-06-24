/**
 * Testimonial database type shortcut.
 */
import { type Database } from './schema';
export type Testimonial = Database['public']['Tables']['Testimonial']['Row'];