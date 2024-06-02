import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

/**
 *  Query that returns all the available projects.
 */
export default eventHandler(async (event) => {
    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with services and error field
    const { data, error } = await client.then((c) => c
        .from('Service')
        .select('id, name, description, picture')
        .order('id')
    );
    if (error){
        handleMissingDataError();
    }
    else {
        return data;
    }
});