import { test, expect } from '@playwright/test';


test('API get request', async ({ request }) => {

    const response = await request.get(
        'https://reqres.in/api/users/2',
        {
            headers: {
                'x-api-key': 'reqres_d52e01c604184d6c9af88f56c8cf455a'
            },
        }
    );

    expect(response.ok()).toBeTruthy();

    const body = await response.json();

    expect(body.data.id).toBe(2)
    expect(body.data.email).toBe('janet.weaver@reqres.in');
    expect(body.data.first_name).toBe('Janet');
    expect(body.data.last_name).toBe('Weaver');

    // Check avatar exists
    expect(body.data.avatar).toContain('https://');

})

test('API post request', async ({ request }) => {

    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                "name": "morpheus",
                "job": "tester"
            },
            headers: {
                'x-api-key': 'reqres_d52e01c604184d6c9af88f56c8cf455a'
            },
        }
    );

    expect(response.status()).toBe(201)

    const body = await response.json();

    expect(body.name).toBe('morpheus');
    expect(body.job).toBe('tester');

    console.log(await body);

})