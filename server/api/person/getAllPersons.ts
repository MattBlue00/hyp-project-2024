/**
 * This API allows to get all the persons that work at SheRise from the database, only with the details that are needed
 * to build the related clickable cards.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// fires when the "/persons" page is visited
export default eventHandler(async (event) => {

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and returns an object with the persons and an error field
    const { data, error } = await client.then((c) => c
        .from('Person')
        .select('id, full_name, main_role, picture')
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