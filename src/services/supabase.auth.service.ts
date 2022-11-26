import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Provider, User } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
export let currentUser = writable<User|null>(null);
export let currentProfile = writable<any>(null);
const profileTable = __APP_PROFILE_TABLE__;
const profileKey = __APP_PROFILE_KEY__;

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const VITE_SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY

// console.log('*** auth: createClient ***');
const supabase: SupabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

supabase.auth.onAuthStateChange(async (event, session) => {
  console.log('onAuthStateChange', event, session);
  console.log('event', event);
  console.log('session', session);
  console.log('session.user', session?.user);
  currentUser.set(session?.user ?? null);
  // if (currentUser?.id) {
  //   console.log('authStateChange: loadProfile here');
  //   loadProfile();
  // } else {
  //   currentProfile.set(null);
  // }
});  

currentUser.subscribe((value: any) => {
  console.log('currentUser.subscribe', value);
  console.log('currentUser?.id', currentUser?.id);
  console.log('value?.id', value?.id);
  if (value?.id) {
    loadProfile(value?.id);
  } else {
    currentProfile.set(null);
  }
})

const loadProfile = async (id: string) => {
  if (!profileTable || !profileKey) return;
  console.log('loadProfile with currentUser.id', currentUser.id);
  const { data, error } = 
  await supabase.from(profileTable)
  .select('*')
  .eq(profileKey, id)
  .limit(1);
  console.log('loadProfile data', data, error);
  if (data && data.length > 0) {
    currentProfile.set(data[0]);
  } else if (error) {
    console.error('loadProfile error', error);
    currentProfile.set(null);
  } else {
    currentProfile.set(null);
  }
}
const loadUser = async () => {
  // get all keys from localStorage
  const keys = Object.keys(localStorage);
  // filter keys to get only supabase.auth.token
  const supabaseToken = keys.filter(key => key.endsWith('-auth-token'));
  if (supabaseToken.length > 0) {
    const { data, error } = await supabase.auth.getUser();
  }
  // this should trigger onAuthStateChange
};
loadUser();

export const signUpWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: window.location.origin // .origin
    }
  });
  return { user: data.user, session: data.session, error };
}

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return { user: data.user, session: data.session, error };
}

export const signInWithProvider = async (provider: Provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: window.location.origin // .origin
    }
  });
  return { data, user: null, session: null, error };
}


export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email,
    {
      redirectTo: window.location.origin // + '/resetpassword'
    });
  return { data, error };
}

export const sendMagicLink = async (email: string) => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: window.location.origin
    }
  });
  return { user: data.user, session: data.session, error };
}

export const updatePassword = async (new_password: string) => {
  const { error, data } = await supabase.auth
    .updateUser({ password: new_password });
  return { error, data };
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  currentUser.set(null);
  currentProfile.set(null);
  return { error };
}

export const checkForPasswordResetToken = () => {
  const hash = window.location.hash;
  let token = "";
  // console.log('hash', hash);
  if (hash && hash.substring(0,1) === '#') {
      const tokens = hash.substring(1).split('&');
      const entryPayload: any = {};
      tokens.map((token) => {
          const pair = (token + '=').split('=');
          entryPayload[pair[0]] = pair[1];
      });
      // console.log('entryPayload', entryPayload);
      if (entryPayload?.type === 'recovery') { // password recovery link
          // return `/resetpassword/${entryPayload.access_token}`;
          // token = entryPayload.access_token;
          token = entryPayload.access_token;
          // console.log('token was set to:', entryPayload.access_token);
      } else {
        // console.log('token was not set entryPayload:', entryPayload);
      }          
  }
  return token;
}

export const saveSettings = async (settings: any) => {
  const { data, error } = await supabase.auth.updateUser({
    data: settings
  })    
  return { data, error };
}


