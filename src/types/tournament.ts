export interface IParticipants {
  current: number;
  max: number;
}

export interface ITournament {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: IParticipants;
  startDate: string;
}
