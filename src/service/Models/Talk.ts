import { Attendee } from "./Attendee";
import { BaseModel } from "./BaseModel";

export class Talk extends BaseModel {
  constructor(name:string,conferenceId:string) {
    super(name);
    this.conferenceId=conferenceId;
  }
  public conferenceId="";
  public attendees: Attendee[] = [];
}