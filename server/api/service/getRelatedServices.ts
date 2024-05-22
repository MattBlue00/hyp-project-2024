import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

/**
 *  Query that returns the project's information, given its ID.
 */
export default eventHandler(async (event) => {
    // project id from the parameters of the query
    const { id } = getQuery(event);
    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with projects and error field
    const { data, error } = await client.then((c) => c
        .from('Service')
        .select('id, name, description, opening_hours, duration, contacts, supervisor_id, picture')
        .eq('supervisor_id', id!)
    );
    if (error) console.log(error);
    return data;
});