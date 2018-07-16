import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ApplicationForm} from "./ApplicationForm";
import gql from 'graphql-tag'

const createSiteMutationDocument = gql`
    mutation create_site($clientMutationId: String!, $domain: String!, $name: String!) {
        createSite(input: {clientMutationId: $clientMutationId,domain: $domain, name: $name}) {
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
                name: 'create_site',
                document: createSiteMutationDocument
            }
        }}
        data={{}}
        ui={{}}
    />
    , document.getElementById('root'));
registerServiceWorker();
