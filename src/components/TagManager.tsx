import { Box, Divider, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { TagCategory } from '../models/Tags';
import NewCategoryComponent from './NewCategoryComponent';
import TagCategoryComponent from './TagCategoryComponent';

const TagManager: React.FC = () => {
    const { tagCategories, updateTagCategories } = useAppContext();

    useEffect(() => {
        updateTagCategories && updateTagCategories();
    }, [updateTagCategories]);

    return (
        <>
            {tagCategories ? (
                <Box p={2}>
                    {tagCategories.length > 0 ? (
                        tagCategories.map((category: TagCategory) => (
                            <React.Fragment key={category.id}>
                                <TagCategoryComponent category={category} />
                            </React.Fragment>
                        ))
                    ) : (
                        <Typography>There are no tags created yet! Start by creating a tag category.</Typography>
                    )}
                    <Divider variant="middle" light />
                    <NewCategoryComponent />
                </Box>
            ) : (
                <>Loading...</>
            )}
        </>
    );
};

export default TagManager;
