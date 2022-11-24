import { writable } from 'svelte/store';
// import type { User } from '@supabase/supabase-js'
export const currentUser: any = writable(null);
let u: any = null;
currentUser.subscribe((user) => {
    u = user;
});
export const getCurrentUser = () => {
    return u;
};