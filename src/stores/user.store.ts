import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js'
import SupabaseAuthService from '$services/supabase.auth.service'

export let currentUser: any = writable(null);
let u: User | null = null;
currentUser.subscribe((user: User) => {
    u = user;
});
export const getCurrentUser = () => {
    return u;
};
let userSubscription: any;

const init = () => {
    if (!userSubscription) {
        userSubscription = SupabaseAuthService.user.subscribe(async (newuser: User | null) => {
            if (newuser) {
                currentUser.set(newuser)
            } else {
                currentUser.set(null)
            }
        });
    }
    // console.log('got user:', user)
}

init();