import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Tag, TagCategory } from '../models/Tags';
import NewTagComponent from './NewTagComponent';
import TagComponent from './TagComponent';

interface Props {
    category: TagCategory;
}

const TagCategoryComponent: React.FC<Props> = ({ category }: Props) => {
    return (
        <Box p={1} mb={2}>
            <Typography variant="h5">{category.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>
                {category.description}
            </Typography>
            <Box display="flex" mt={2} alignItems="center" flexWrap="wrap">
                {category.tags.map((tag: Tag) => (
                    <React.Fragment key={tag.id}>
                        <TagComponent tag={tag} />
                    </React.Fragment>
                ))}
                <NewTagComponent categoryName={category.name} categoryId={category.id} />
            </Box>
        </Box>
    );
};

export default TagCategoryComponent;
