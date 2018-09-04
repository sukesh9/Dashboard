export class RegularHoursModel{

    Monday: Session[];
    Tuesday: Session[];
    Wednesday: Session[];
    Thursday: Session[];
    Friday: Session[];
    Saturday: Session[];
    Sunday: Session[];
}

export class Session{
    from: string;
    to: string;

}