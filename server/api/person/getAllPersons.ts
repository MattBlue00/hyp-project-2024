import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';

/**
 *  Query that returns all the available persons.
 */
export default eventHandler(async (event) => {
    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with projects and error field
    const { data, error } = await client.then((c) => c
        .from('Person')
        .select('id, full_name, main_role, picture')
        .order('id')
    );
    if (error) console.log(error);
    return data;
});