import { BaseService } from "./BaseService";
import { ConferenceService } from "./ConferenceService";
import { Attendee } from "./Models/Attendee";

export class AttendeeService {
  
  private readonly baseService: BaseService;
  private readonly conferenceService: ConferenceService;

  constructor(baseService: BaseService,conferenceService: ConferenceService) {
    this.baseService = baseService;
    this.conferenceService=conferenceService;
  }

  public patchAttendeeToTalk(attendeeId: string, conferenceId: string, talkId: string) {
    let selectedTalk;
    const allconferences=this.conferenceService.getAllConferences();
    const conferenceIndex=allconferences.findIndex(x=>x.id==conferenceId);
    const conference=allconferences[conferenceIndex];
    if(conference){
      const attendee=conference.attendees.find(x=>x.id===attendeeId);
      if(attendee){
        const talkIndex = conference.talks.findIndex(function(talk) { 
          return talk.id === talkId; 
         });
         if(conference.talks[talkIndex]){
          conference.talks[talkIndex].attendees.push(attendee);
          selectedTalk= conference.talks[talkIndex]
         }
         allconferences[conferenceIndex]=conference;
         this.conferenceService.bulkSaveConferences(allconferences);
      }               
     return selectedTalk;
    }
    
  }
 
  public removeAttendeeFromConfrence(conferenceId: any, talkId: any, attendeeId: any) {
    debugger
    const allconferences=this.conferenceService.getAllConferences();
    const conferenceIndex=allconferences.findIndex(x=>x.id==conferenceId);
    const conference=allconferences[conferenceIndex];
    if(conference){
      let attendee=conference.attendees.find(x=>x.id===attendeeId);
      if(attendee){
        const talkIndex = conference.talks.findIndex(function(talk) { 
          return talk.id === talkId; 
         });
         if(talkIndex===-1){
           return;
         }
         const attendeeIndexInConferenceTalk = conference.talks[talkIndex].attendees.findIndex(function(attendee) { 
          return attendee.id === attendeeId; 
         });
         if(conference.talks[talkIndex].attendees[attendeeIndexInConferenceTalk]){
          conference.talks[talkIndex].attendees.splice(attendeeIndexInConferenceTalk,1);
         }
      }  
      this.conferenceService.bulkSaveConferences(allconferences);  
    }
    return conference;
  }

}