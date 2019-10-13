import * as React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { tileData } from './tileData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      padding: theme.spacing(4),
    },
    gridList: {
      maxWidth: 1000,
    },
  }),
);

export default function IllustrationGrid() {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
        <GridList cellHeight={300} cols={3} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Created in: {tile.materials}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
    </div>
  );
}
