import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

/**
 *  Query that returns the total number of available persons.
 */
export default eventHandler(async (event) => {
    // Client for the Supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // Query the DB to get the total count of persons
    const { count, error } = await client.then((c) => c
        .from('Person')
        .select('*', { count: 'exact', head: true })
    );

    if (error){
        handleMissingDataError();
    }
    else {
        return count;
    }
});