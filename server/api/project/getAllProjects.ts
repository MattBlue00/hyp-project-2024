/**
 * This API allows to get all the projects that SheRise is involved in.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when "/activities" or "/activities/projects" is loaded
export default eventHandler(async (event) => {

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and returns an object with the projects and an error field
    const { data, error } = await client.then((c) => c
        .from('Project')
        .select('id, name, description, picture')
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