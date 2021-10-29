import { Attendee } from "./Attendee";
import { BaseModel } from "./BaseModel";
import { Talk } from "./Talk";

export class Conference extends BaseModel {
  constructor(name: string) {
     super(name);
  }
  public attendees: Attendee[] = [];
  public talks: Talk[] = []; 
}