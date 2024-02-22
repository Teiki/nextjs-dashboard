export default interface EventFormData {
    eventName: string;
    eventDate: string;
    eventLocation: string;
    eventDescription: string;
    eventPlace: string;
    eventDoc: File|undefined;
}