/**
 * This function allows us to handle the error we get while fetching
 * wrong data from our database. If no data is present, we create
 * a 404 error.
 */

export function handleFetchError(data: Ref<any>, errorCode: number) {
    let errorMessage = '';
    if (!data.value) {
        errorMessage = 'This page does not exists.';
        throw createError({ statusCode: 404, message: errorMessage });
    } else {
        errorMessage = 'Error while fetching data from the database.';
        throw createError({ statusCode: errorCode, message: errorMessage });
    }
}