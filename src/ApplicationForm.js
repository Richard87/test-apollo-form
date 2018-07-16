
import * as React from 'react';
import { configure } from 'react-apollo-form';
import { client } from './apollo'; // a file thats export a configured Apollo Client
import jsonSchema from './apollo-form-json-schema.json';

export const ApplicationForm = configure({
    client: client,
    jsonSchema
});