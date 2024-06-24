/**
 * This API allows to get the total number of services SheRise is involved in. This is useful for building group
 * links without hardcoding.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when "/activities/services/[id]" is loaded
export default eventHandler(async (event) => {

    // client for the Supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and then returns an object with the number of services and an error field
    const { count, error } = await client.then((c) => c
        .from('Service')
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