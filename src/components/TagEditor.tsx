import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { TagCategory } from '../models/Tags';
import { axiosGet } from '../api/base';

const TagEditor: React.FC = () => {
    const [tagCategories, setTagCategories] = useState<TagCategory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
        <Box>
            {tagCategories.map((category: TagCategory) => (
                <React.Fragment key={category.id}>{category.name}</React.Fragment>
            ))}
        </Box>
    );
};

export default TagEditor;
