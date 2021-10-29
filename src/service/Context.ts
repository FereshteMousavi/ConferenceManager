import { AttendeeService } from "./AttendeeService";
import { BaseService } from "./BaseService";
import { ConferenceService } from "./ConferenceService";
import { TalkService } from "./TalkService";

const baseService = new BaseService();
export const conferenceService = new ConferenceService(baseService);
export const attendeeService = new AttendeeService(baseService,conferenceService);
export const talkService = new TalkService(baseService);