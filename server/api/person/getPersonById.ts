import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

/**
 *  Query that returns the person's information, given its ID.
 */
export default eventHandler(async (event) => {
    // person id from the parameters of the query
    const { id } = getQuery(event);
    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with projects and error field
    const { data, error } = await client.then((c) => c
        .from('Person')
        .select('id, bio, education, past_experience, main_expertise, main_role, full_name, motto, picture')
        .eq('id', id!)
        .single()
    );
    if (error){
        handleMissingDataError();
    }
    else {
        return data;
    }
});