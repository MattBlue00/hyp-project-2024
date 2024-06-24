/**
 * This API allows to get the total number of SheRise testimonials. This is useful to avoid hardcoding when fetching
 * three random testimonials in the home page.
 */

// imports
import {serverSupabaseClient} from "#supabase/server";
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when "/" is loaded
export default eventHandler(async (event) => {

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and returns an object with the total number of testimonials
    const { count, error} = await client.then((c) => c
        .from('Testimonial')
        .select('*', { count: 'exact', head: true })
    );

    // handles an error, if present
    if (error){
        handleMissingDataError();
    }
    // else returns the data
    else {
        return count;
    }

});