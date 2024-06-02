import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

/**
 *  Query that returns the service's testimonials, given the service ID.
 */
export default eventHandler(async (event) => {
    // employee id from the parameters of the query
    const { service_id } = getQuery(event);
    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with testimonials and error field
    const { data, error } = await client.then((c) => c
        .from('Testimonial')
        .select('id, author_full_name, statement, service_id, author_picture')
        .eq('service_id', service_id!)
        .order('id')
    );
    if (error){
        handleMissingDataError();
    }
    else {
        return data;
    }
});