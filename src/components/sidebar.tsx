import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

/** Avaliable values for selecting a page. */
export type Page = 'About' | 'Illustration' | 'Animation' | 'Websites';

/** Props passed to the ShowSubsetDropdown. */
export interface SidebarProps {
  /** Indicates which page we are currently viewing. */
  pageToShow: Page;
  /**
   * Function called when the user changes the page.
   * @param nextPage Indicates page user will view next.
   */
  onChangePage: (nextPage: Page) => void;
}

/**
 * Checks to see if a string is a Page.
 * @param sCandidate string to check.
 * @return boolean that shows if sCandidate is a Page.
 */
function isPageOption(sCandidate: string): sCandidate is Page {
  return (
    sCandidate === 'About' ||
    sCandidate === 'Illustration' ||
    sCandidate === 'Animation' ||
    sCandidate === 'Websites'
  );
}

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Sidebar({
  pageToShow,
  onChangePage,
}: SidebarProps) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={pageToShow}
      onChange={ (e: React.ChangeEvent<{value: string}>) => {
          const val = e.target.value;
          if (isPageOption(val)) {
            onChangePage(val);
          }
        }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label='About' value='About' />
      <BottomNavigationAction label='Illustration' value='Illustration'/>
      <BottomNavigationAction label='Animation' value='Animation'/>
      <BottomNavigationAction label='Websites' value='Websites'/>
    </BottomNavigation>
  );
}
