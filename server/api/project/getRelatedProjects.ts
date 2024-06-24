/**
 * This API allows to get all the projects that a person with a given id is supervisor of.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when "/persons/[id]" is loaded
export default eventHandler(async (event) => {

    // gets the supervisor id from the parameters of the query
    const { id } = getQuery(event);

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and returns an object with the projects and an error field
    const { data, error } = await client.then((c) => c
        .from('Project')
        .select('id, name, description, supervisor_id, picture')
        .eq('supervisor_id', id!)
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