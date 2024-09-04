import { supabase } from '../config/supabase';

export const registerUser = async (name: string, email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }

  return data;
  // if (data?.user) {
  //   // Inserindo o nome do usuário na tabela do Supabase
  //   const { error: insertError } = await supabase
  //     .from('users')
  //     .insert([{ id_user: data.user.id, name, email }]);

  //   if (insertError) {
  //     throw new Error(insertError.message);
  //   }
  // }
};

export const loginUser = async (email: string, password: string) => {
  const { error, data } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
  return data;
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
};