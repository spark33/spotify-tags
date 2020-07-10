import React, { useEffect, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { TagCategory } from '../models/Tags';
import { axiosGet } from '../api/base';
import TagCategoryComponent from './TagCategoryComponent';

const useStyles = makeStyles(() => ({}));

const TagEditor: React.FC = () => {
    const [tagCategories, setTagCategories] = useState<TagCategory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const classes = useStyles();

    useEffect(() => {
        try {
            axiosGet('./mockData/tagsByCategory.json').then((tagsByCategory: TagCategory[]) => {
                setTagCategories(tagsByCategory);
                setIsLoading(false);
            });
        } catch (err) {
            console.error(err);
        }
    }, []);

    if (isLoading) {
        return <></>;
    }

    return (
        <Box p={2}>
            {tagCategories.map((category: TagCategory) => (
                <React.Fragment key={category.id}>
                    <TagCategoryComponent category={category} />
                </React.Fragment>
            ))}
        </Box>
    );
};

export default TagEditor;
