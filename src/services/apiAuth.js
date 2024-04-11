import supabase from "./supabase";

export async function signupUser({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    // ADDDING OPTIONAL DATA FOR NEWLY CREATED USER
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData;
  if (password) updateData = { password };

  if (fullName)
    updateData = {
      data: {
        fullName,
        avatar,
      },
    };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
