export type Player = {
    rank: number;
    avatar: string;
    username: string;
    score: number;
}

export interface GameSelectProps {
  selectedGame: string | null;
  setSelectedGame: (game: string) => void;
  options: string[];
}

export interface LeaderboardItemProps {
    item: Player;
}