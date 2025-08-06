export type Player = {
  rank: number;
  avatar: string;
  username: string;
  score: number;
};

export interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface LeaderboardItemProps {
  item: Player;
}
