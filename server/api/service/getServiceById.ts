/**
 * This API allows to get all the details of a service given its id.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when "/activities/services/[id]" is loaded
export default eventHandler(async (event) => {

    // gets the service id from the parameters of the query
    const { id } = getQuery(event);

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and then returns an object with the service and an error field
    const { data, error } = await client.then((c) => c
        .from('Service')
        .select('id, name, description, opening_hours, duration, contacts, supervisor_id, picture')
        .eq('id', id!)
        .single()
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