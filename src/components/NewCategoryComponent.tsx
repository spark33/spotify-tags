import { Box, Button, Link, makeStyles, Paper } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { ColorPalette } from 'material-ui-color';
import React, { useState } from 'react';
import CategoryPalette from '../CategoryPalette';
import { useAppContext } from '../contexts/AppContext';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
    },
}));

const NewCategoryComponent: React.FC = () => {
    const classes = useStyles();
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [selectedColor, setSelectedColor] = useState<string | number>();
    const { updateTagCategories } = useAppContext();

    const toggleEditingState = () => {
        setIsEditing(!isEditing);
    };

    const handleColorSelect = (colorName: string | number) => {
        setSelectedColor(CategoryPalette[colorName]);
    };

    return (
        <Box mt={2}>
            {isEditing ? (
                <Paper>
                    <Box p={2} pb={3}>
                        <Formik
                            initialValues={{
                                name: '',
                                description: '',
                            }}
                            onSubmit={async (values) => {
                                // todo: submit values to API
                                console.log(selectedColor);
                                console.log(values);
                                updateTagCategories && (await updateTagCategories());
                                setIsEditing(false);
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <ColorPalette palette={CategoryPalette} onSelect={handleColorSelect} />
                                    <Box mb={1}>
                                        <Field
                                            className={classes.textField}
                                            type="text"
                                            name="name"
                                            placeholder="New Tag Name"
                                        />
                                    </Box>
                                    <Box mb={1}>
                                        <Field
                                            className={classes.textField}
                                            type="text"
                                            name="description"
                                            placeholder="New Tag Description"
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="flex-end">
                                        <Box ml={1}>
                                            <Button color="default" onClick={toggleEditingState}>
                                                Cancel
                                            </Button>
                                        </Box>
                                        <Box ml={1}>
                                            <Button autoFocus type="submit">
                                                Create
                                            </Button>
                                        </Box>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Paper>
            ) : (
                <Link onClick={toggleEditingState}>+ Add New Category</Link>
            )}
        </Box>
    );
};

export default NewCategoryComponent;
