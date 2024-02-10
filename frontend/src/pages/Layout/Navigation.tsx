import * as React from 'react';

import { Box } from '@mui/joy';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function Navigation() {
  return (
    <List size="sm" sx={{ '--ListItem-radius': '8px', '--List-gap': '4px' }}>
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
          Algorithms
        </ListSubheader>
        <List>
          <ListItem>
            <ListItemButton selected>
              <ListItemDecorator>
                <Box
                  sx={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '99px',
                    bgcolor: 'primary.500',
                  }}
                />
              </ListItemDecorator>
              <ListItemContent>MD5</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
