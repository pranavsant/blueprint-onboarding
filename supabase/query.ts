import { supabase } from "@/supabase/client";

export type PostData = {
  id: number;
  created_at: string;
  user_name: string;
  npo_name: string;
  post_text: string;
  location_id: number;
  image_link: string;
  num_likes: number;
};

export type PostComment = {
  id: number;
  created_at: string;
  post_id: number;
  user_name: string;
  num_likes: number;
  comment_text: string;
};

export type Location = {
  id: number;
  city_name: string;
  state_abbr: string;
};

export async function getAllPosts(): Promise<PostData[]> {
  const { data, error } = await supabase.from("Posts").select("*");

  if (error) {
    throw error;
  }

  return data!;
}

export async function getAllComments(): Promise<PostComment[]> {
  const { data, error } = await supabase.from("Comments").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getAllLocations(): Promise<Location[]> {
  const { data, error } = await supabase.from("Locations").select("*");

  if (error) {
    throw error;
  }

  return data;
}
