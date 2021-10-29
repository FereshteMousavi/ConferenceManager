import { Box, Button, Typography } from '@material-ui/core';
import { Fragment } from 'react';
import { attendeeService } from './service/Context';

export default function ConferenceAttendee(props) {
  const handleAttendeeRemove = async () => {
    const response = attendeeService.removeAttendeeFromConfrence(props.conference.id, props.talk.id, props.attendee.id);
    if(response){
      props.setTalk(response);
    }
    props.setAttendee();
  };

  return (
    <Fragment>
      <Box py={2}>
        <Typography variant="h6">Attendee Name</Typography>
        <Typography>{props.attendee.name}</Typography>
      </Box>
      {props.talk && (
        <Box pb={2}>
          <Button variant="contained" color="secondary" onClick={handleAttendeeRemove}>Remove Attendee From Talk</Button>
        </Box>
      )}
    </Fragment>
  );
}
