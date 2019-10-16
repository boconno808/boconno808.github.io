import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { tileData } from './tileData';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetModalStyle from './getModalStyle';

//Need to make state to hold the current tile selected
//Functions for the Modal fix the modal to add images

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
      maxWidth: 600,
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: 0,
      padding: theme.spacing(2),
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

export default function IllustrationGrid() {
  const classes = useStyles({});

  const [modalStyle] = React.useState(GetModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [count, setCount] = React.useState(0);

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
                <IconButton aria-label={`${tile.title}`}
                  className={classes.icon}
                  onClick={() => {
                    setOpen(true);
                    setCount(tile.index);
                  }} >
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
              <img style={{maxWidth:'100%'}} src={tileData[count].img} alt={tileData[0].title}/>
          </div>
        </Modal>
    </div>
  );
}
