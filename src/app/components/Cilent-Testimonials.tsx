
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// 2. Explicitly define Database type for the testimonials table (minimal for this file)
type ClientTestimonialRow = {
  id: string;
  name: string;
  review: string;
  role: string;
  created_at: string;
};

type ClientTestimonialInsert = {
  name: string;
  review: string;
  role: string;
};

type Database = {
  public: {
    Tables: {
      client_testimonials: {
        Row: ClientTestimonialRow;
        Insert: ClientTestimonialInsert;
        Update: Partial<ClientTestimonialRow>;
      };
    };
  };
};

type Testimonial = {
  id: string;
  name: string;
  review: string;
  role: string;
  created_at?: string;
};

// Supabase client initialization
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "public-anon-key";
const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Get testimonials (all, ordered by created_at ascending)
const getTestimonials = async (): Promise<Testimonial[]> => {
  const { data, error } = await supabase
    .from("client_testimonials")
    .select("*")
    .order("created_at", { ascending: true });
  if (error || !data) return [];
  return data.map((item: ClientTestimonialRow) => ({
    id: item.id,
    name: item.name,
    review: item.review,
    role: item.role,
    created_at: item.created_at,
  }));
};

// Insert a testimonial
const insertTestimonial = async (testimonial: ClientTestimonialInsert) => {
  const { data, error } = await supabase
    .from("client_testimonials")
    // @ts-expect-error - Supabase type inference issue
    .insert([testimonial]).select();
  if (error) {
    throw error;
  }
  return data;
};


export default function CilentTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({
    name: "",
    review: "",
    role: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials from Supabase on mount (no realtime)
  useEffect(() => {
    let ignore = false;
    async function fetchTestimonials() {
      setLoading(true);
      const data = await getTestimonials();
      if (!ignore) {
        setTestimonials(data);
        setLoading(false);
      }
    }
    fetchTestimonials();
    return () => {
      ignore = true;
    };
  }, []);

  // Handle carousel keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!testimonials.length) return;
    if (e.key === "ArrowLeft") {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else if (e.key === "ArrowRight") {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setFormError("");
    setFormSuccess(false);
  };

  // Handle form submission with duplicate prevention
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.review.trim() || !form.role.trim()) {
      setFormError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      // Check if testimonial with this name already exists
      const { data: existingData, error: existingError } = await supabase
        .from("client_testimonials")
        .select("id")
        .eq("name,role", form.name.trim());

      if (existingError) {
        setFormError(
          existingError.message ||
            "Unable to verify existing testimonials. Please try again later."
        );
        setLoading(false);
        return;
      }

      if (existingData && existingData.length > 0) {
        setFormError("A testimonial has already been submitted with this name and role. Multiple submissions are not allowed.");
        setLoading(false);
        return;
      }

      await insertTestimonial(form);
      setForm({
        name: "",
        review: "",
        role: "",
      });
      setShowForm(false);
      setFormSuccess(true);

      // Refresh the list
      const data = await getTestimonials();
      setTestimonials(data);
      setLoading(false);

      setTimeout(() => setFormSuccess(false), 5000);
    } catch (e: unknown) {
      setFormError(
        e instanceof Error
          ? "An error occurred: " + e.message
          : "An unexpected error occurred."
      );
      setLoading(false);
    }
  };

  // Always reset current if testimonials changes
  useEffect(() => {
    setCurrent((c) => {
      if (!testimonials.length) return 0;
      if (c >= testimonials.length) return testimonials.length - 1;
      return c;
    });
  }, [testimonials]);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Hear what our clients have to say about working with Bilal Ayub & Co.
          </p>
        </div>

        {/* Client's own testimonial form */}
        <div className="flex flex-col items-center mb-12">
          <button
            onClick={() => setShowForm((f) => !f)}
            className="mb-4 px-6 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary-dark transition"
            aria-expanded={showForm}
          >
            {showForm ? "Cancel" : "Submit Your Own Testimonial"}
          </button>

          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md flex flex-col gap-4"
              aria-label="Submit testimonial"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">Share Your Experience</h3>
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="role" className="block mb-1 text-gray-700 font-medium">
                  Case Type / Your Relationship (e.g., Property Law Client)
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="review" className="block mb-1 text-gray-700 font-medium">
                  Your Testimonial
                </label>
                <textarea
                  id="review"
                  name="review"
                  value={form.review}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-primary resize-none"
                  required
                />
              </div>
              {formError && (
                <div className="text-red-500 text-sm mb-2">{formError}</div>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition"
                disabled={loading}
              >
                Submit
              </button>
            </form>
          )}
          {formSuccess && (
            <div className="mt-2 text-green-600 text-sm font-medium">
              Thank you for submitting your testimonial!
            </div>
          )}
        </div>

        {/* Dynamic carousel/slider for testimonials */}
        <div
          className="relative flex flex-col items-center"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label="Testimonials carousel"
        >
          <div className="w-full max-w-xl">
            <div
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center transition-all duration-300"
              key={testimonials[current]?.id || "default"}
            >
              <svg
                className="w-12 h-12 text-primary mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.17 13C6.52 13 6 12.47 6 11.82c0-1.19.28-2.22.84-3.07.56-.85 1.36-1.66 2.4-2.52C10.82 5.59 11 5.31 11 5c0-.55-.45-1-1-1-.22 0-.43.07-.6.19C6.63 6.13 5 8.38 5 11.05c0 2.49 2.01 4.5 4.5 4.5.83 0 1.5-.67 1.5-1.5S10.33 13 9.5 13h-2.33zm8 0c-.65 0-1.17-.53-1.17-1.18 0-1.19.28-2.22.84-3.07.56-.85 1.36-1.66 2.4-2.52C18.82 5.59 19 5.31 19 5c0-.55-.45-1-1-1-.22 0-.43.07-.6.19-2.77 1.94-4.4 4.19-4.4 6.86 0 2.49 2.01 4.5 4.5 4.5.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2.33z" />
              </svg>
              <p className="text-gray-700 mb-4 italic text-center">
                {loading || !testimonials.length
                  ? <span className="text-gray-400">Loading testimonial...</span>
                  : `"${testimonials[current].review}"`}
              </p>
              {!loading && testimonials.length > 0 && (
                <>
                  <div className="mt-4 text-primary font-semibold">
                    {testimonials[current].name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[current].role}
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Controls */}
          <div className="flex space-x-4 mt-8 items-center">
            <button
              aria-label="Previous testimonial"
              onClick={() =>
                setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
              }
              className="p-2 rounded-full bg-white hover:bg-gray-100 transition shadow"
              disabled={testimonials.length === 0 || loading}
              type="button"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* pagination dots */}
            <div className="flex space-x-2">
              {testimonials.map((testimonial: Testimonial, i: number) => (
                <button
                  key={testimonial.id || `testimonial-${i}`}
                  className={`w-3 h-3 rounded-full ${i === current ? "bg-primary" : "bg-gray-300"}`}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  disabled={loading}
                  type="button"
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={() =>
                setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
              }
              className="p-2 rounded-full bg-white hover:bg-gray-100 transition shadow"
              disabled={testimonials.length === 0 || loading}
              type="button"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Indicator */}
          <div className="mt-4 text-xs text-gray-400 italic">
            {!loading
              ? `${testimonials.length} testimonial${testimonials.length !== 1 ? "s" : ""}`
              : "Loading..."}
          </div>
        </div>
      </div>
    </section>
  );
}

