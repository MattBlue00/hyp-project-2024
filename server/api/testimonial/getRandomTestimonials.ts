/**
 * This API allows to get random testimonials about SheRise's services.
 */

// imports
import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

// constant defining the number of testimonials to show
const number_of_testimonials_to_show = 3;

// return a list of random numbers that represent the ids of the testimonials to show
function getRandomNumbers(count: number, min: number, max: number): number[] {
    const numbers: number[] = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

// fires when "/" is loaded
export default eventHandler(async (event) => {

    // gets the number of testimonials from the parameters of the query
    const { testimonials_count } = getQuery(event);

    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // queries the database and returns an object with the random testimonials and an error field
    const randomIds = getRandomNumbers(number_of_testimonials_to_show, 1, parseInt(testimonials_count!.toString()));
    const { data, error } = await client.then((c) => c
        .from('Testimonial')
        .select('id, author_full_name, statement, service_id, author_picture')
        .in('id', randomIds) // Filter for random generated IDs
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