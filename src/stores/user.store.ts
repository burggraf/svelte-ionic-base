import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js'
export let currentUser: any = writable(null);
let u: User | null = null;
currentUser.subscribe((user: User) => {
    u = user;
});
export const getCurrentUser = () => {
    return u;
};