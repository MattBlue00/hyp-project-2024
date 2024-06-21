import { serverSupabaseClient } from '#supabase/server';
import { Database } from '~/types/schema';
import {handleMissingDataError} from "~/composables/errorHandlers";

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

const randomNumbers = getRandomNumbers(3, 1, 10);
console.log(randomNumbers);

/**
 *  Query that returns the service's testimonials, given the service ID.
 */
export default eventHandler(async (event) => {
    // client for the supabase DB and infer the DB structure
    const client = serverSupabaseClient<Database>(event);
    // query the Db and then send to the Vue client an object with testimonials and error field
    const randomIds = getRandomNumbers(3, 1, 10);
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