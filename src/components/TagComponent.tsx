import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { Tag } from '../models/Tags';

const useStyles = makeStyles((theme) => ({
    editButton: {
        marginLeft: theme.spacing(1),
        width: theme.spacing(2),
        color: 'rgba(0, 0, 0, 0.26)', // matches delete icon
        '&:hover': {
            backgroundColor: 'transparent',
            color: 'rgba(0, 0, 0, 0.4)', // matches delete icon
        },
    },
}));

interface Props {
    tag: Tag;
}

const TagComponent: React.FC<Props> = ({ tag }: Props) => {
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const deleteTag = () => {
        console.log(tag.id);
        // todo: api request to delete tag by id and delete all references to said tag in all songs
        setDialogOpen(false);
    };

    const tagContent = (
        <>
            {tag.name}
            <IconButton className={classes.editButton} edge="end" disableRipple disableFocusRipple>
                <EditIcon />
            </IconButton>
        </>
    );

    return (
        <>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>
                    <Typography variant="h5">Are you sure you want to delete this tag?</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography>Deleting this tag will remove the tag from all existing songs.</Typography>
                </DialogContent>
                <DialogActions>
                    <Box display="flex">
                        <Box mr={1}>
                            <Button variant="outlined" autoFocus onClick={() => setDialogOpen(false)}>
                                Cancel
                            </Button>
                        </Box>
                        <Button onClick={deleteTag}>Yes, delete this tag.</Button>
                    </Box>
                </DialogActions>
            </Dialog>
            <Box my={1} mr={1}>
                <Chip key={tag.id} label={tagContent} onDelete={() => setDialogOpen(true)} />
            </Box>
        </>
    );
};

export default TagComponent;
