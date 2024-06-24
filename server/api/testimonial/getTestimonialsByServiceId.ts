/**
 * This API allows to get the testimonials of a service given its id.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when "/activities/services/[id]" is loaded
export default eventHandler(async (event) => {

    // gets the service id from the parameters of the query
    const { service_id } = getQuery(event);

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and then returns an object with the testimonials and an error field
    const { data, error } = await client.then((c) => c
        .from('Testimonial')
        .select('id, author_full_name, statement, service_id, author_picture')
        .eq('service_id', service_id!)
        .order('id')
    );

    // handles an error, if present
    if (error){
        handleMissingDataError();
    }
    // else returns the data
    else {
        return data;
    }

});