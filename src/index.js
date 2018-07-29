import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {ApplicationForm} from "./ApplicationForm";
import gql from 'graphql-tag'

const createSiteMutationDocument = gql`
    mutation createSite($clientMutationId: String!, $domain: String!) {
        createSite(input: {clientMutationId: $clientMutationId,domain: $domain}) {
            id
        }
    }
`;

ReactDOM.render(
    <ApplicationForm
        title="Todo Form"
        liveValidate={true}
        config={{
            mutation: {
                name: 'createSite',
                document: createSiteMutationDocument
            }
        }}
    />
    , document.getElementById('root'));
registerServiceWorker();
