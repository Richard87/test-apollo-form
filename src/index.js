import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {ApplicationForm} from "./forms/ApplicationForm";
import gql from 'graphql-tag'
import {FieldTemplate} from "./forms/FieldTemplate";

const createSiteMutationDocument = gql`
    mutation createSite($input: createSiteInput!) {
        createSite(input: $input) {
            id
        }
    }
`;

ReactDOM.render(
    <div className="container">
    <div className="col-md-6 col-md-offset-3"><ApplicationForm
        title="Todo Form"
        liveValidate={true}
        config={{
            mutation: {
                name: 'createSite',
                document: createSiteMutationDocument
            },
            ignoreFields: ['input.clientMutationId', "input.openingHours"],
            requiredFields: ["input.domain"]
        }}
        data={{"input":{"clientMutationId": "1"}}}
    /></div>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
