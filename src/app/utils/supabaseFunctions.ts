import { createClient } from '@supabase/supabase-js';

// Placeholder for Supabase client initialization.
// In a real application, this would be initialized with your Supabase URL and Anon Key.
// For example: const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
// For demonstration, we'll use a dummy client.
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

export interface ClientTestimonialInsert {
  message: string;
  // Add other properties as needed for insertion, e.g., client_name, rating
}

export interface ClientTestimonial {
  id: string; // Assuming Supabase generates an ID
  message: string;
  created_at: string; // Assuming a timestamp
  // Add other properties as they exist in the 'client_testimonials' table, e.g., client_name, rating
}

// Insert a testimonial
const insertTestimonial = async (testimonial: ClientTestimonialInsert): Promise<ClientTestimonial[] | null> => {
  const { data, error } = await supabase
    .from("client_testimonials")
    .insert([testimonial])
    .select(); // Added .select() to ensure data is returned

  if (error) {
    throw error;
  }
  return data;
};

export { insertTestimonial };
