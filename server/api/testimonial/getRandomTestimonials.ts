import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

const number_of_witnesses_to_show = 3;

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

/**
 *  Query that returns the service's testimonials, given the service ID.
 */
export default eventHandler(async (event) => {
    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);

    // Query the DB to get the total count of testimonials
    const { count} = await client.then((c) => c
        .from('Testimonial')
        .select('*', { count: 'exact', head: true })
    );

    // query the Db and then send to the Vue client an object with testimonials and error field
    const randomIds = getRandomNumbers(number_of_witnesses_to_show, 1, count!);
    const { data, error } = await client.then((c) => c
        .from('Testimonial')
        .select('id, author_full_name, statement, service_id, author_picture')
        .in('id', randomIds) // Filter for random generated IDs
        .order('id')
    );
    if (error){
        handleMissingDataError();
    }
    else {
        return data;
    }
});