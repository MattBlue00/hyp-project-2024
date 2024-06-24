/**
 * This API allows to get all the details of a person given their id.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when "/persons/[id]", "/activities/projects/[id]", or "/activities/services/[id]" is loaded
export default eventHandler(async (event) => {

    // gets the person id from the parameters of the query
    const { id } = getQuery(event);

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and then returns an object with the person and an error field
    const { data, error } = await client.then((c) => c
        .from('Person')
        .select('id, bio, education, past_experience, main_expertise, main_role, full_name, motto, picture')
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