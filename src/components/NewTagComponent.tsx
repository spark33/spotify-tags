import { Box, Button, Link } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

interface Props {
    categoryName: string;
    categoryId: string;
}

const NewTagComponent: React.FC<Props> = ({ categoryName, categoryId }: Props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { updateTagCategories } = useAppContext();

    const toggleEditingState = () => {
        setIsEditing(!isEditing);
    };

    return (
        <Box my={1}>
            {isEditing ? (
                <Formik
                    initialValues={{ name: '' }}
                    onSubmit={async (values) => {
                        // todo: submit values to API
                        updateTagCategories && (await updateTagCategories());
                        setIsEditing(false);
                    }}
                >
                    {(props) => (
                        <Form>
                            <Box display="flex">
                                <Field type="text" name="name" placeholder="New Tag Name" />
                                <Box ml={1}>
                                    <Button type="submit">Create</Button>
                                </Box>
                                <Box ml={1}>
                                    <Button color="default" onClick={toggleEditingState}>
                                        Cancel
                                    </Button>
                                </Box>
                            </Box>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Link onClick={toggleEditingState}>+ Add Tag to {categoryName}</Link>
            )}
        </Box>
    );
};

export default NewTagComponent;
