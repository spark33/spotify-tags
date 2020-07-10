import React, { useEffect, useState } from 'react';
import { Box, makeStyles, Typography, Chip, Link } from '@material-ui/core';
import { TagCategory, Tag } from '../models/Tags';
import { axiosGet } from '../api/base';

const useStyles = makeStyles(() => ({}));

interface Props {
    category: TagCategory;
}

const TagCategoryComponent: React.FC<Props> = ({ category }: Props) => {
    const classes = useStyles();

    return (
        <Box p={2} mb={2}>
            <Typography variant="h5" gutterBottom>
                {category.name}
            </Typography>
            <Box display="flex" mt={2} alignItems="center">
                {category.tags.map((tag: Tag) => (
                    <Box mr={1} key={tag.id}>
                        <Chip key={tag.id} label={tag.name} />
                    </Box>
                ))}
                <Link>+ Add Tag to {category.name}</Link>
            </Box>
        </Box>
    );
};

export default TagCategoryComponent;
