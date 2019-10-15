import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { tileData } from './tileData';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';

//Functions for the Modal fix the modal to add images
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      padding: theme.spacing(6),
    },
    gridList: {
      maxWidth: 1000,
    },
    modalPaper: {
      position: 'absolute',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

export default function IllustrationGrid() {
  const classes = useStyles({});

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <GridList cellHeight={300} cols={3} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title}/>
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Created in: {tile.materials}</span>}
                actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon} onClick={handleOpen} >
                  <VisibilityIcon />
                </IconButton>
              }
              />
            </GridListTile>
          ))}
        </GridList>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.modalPaper}>
            <p> egg </p>
          </div>
        </Modal>
    </div>
  );
}
