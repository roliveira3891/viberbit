import "react-native-url-polyfill/auto";


import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_API_URL as string;
const supabaseKey = process.env.EXPO_PUBLIC_API_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});


export class SupabaseService {
	private client: SupabaseClient;
  
	constructor() {
	  this.client = supabase;
	}
  
	getClient(): SupabaseClient {
	  return this.client;
	}
  }