import * as React from 'react';
import { FieldTemplateProps } from 'react-jsonschema-form';
import { FormContext } from 'react-apollo-form';

export const FieldTemplate = (props) => {
    const { classNames, help, description, errors, children, rawErrors } = props;
    const showErrorsInline = props.formContext.showErrorsInline;
    return (
        <div className={classNames}>
            <div>
                {description}
                {children}
                {help}
                {
                    errors && showErrorsInline && (
                        <div className="errors">
                            {errors}
                        </div>
                    )
                }
            </div>
        </div>
    );
};