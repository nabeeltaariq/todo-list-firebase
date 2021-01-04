import React from 'react'
import './Todo.css'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import { ListItemAvatar } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

function Todo(props) {
  return (
    <div className='todo'>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem button>
          <ListItemAvatar></ListItemAvatar>

          <ListItemText primary={props.text} secondary='Try this' />
        </ListItem>
      </List>
    </div>
  )
}

export default Todo
