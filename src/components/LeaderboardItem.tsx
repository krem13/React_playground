import { LeaderboardItemProps } from "../types/leaderboard.interface";

export default function LeaderboardItem(props: LeaderboardItemProps) {
  return (
    <div className="flex w-full h-full bg-white border-[1px] border-gray-300 items-center justify-stretch px-4 py-2 my-2">
      <p className="w-[10px] text-left">{props.item.rank}</p>
      <p className="mx-8 text-left min-w-[58px] w-[58px] h-[58px]">
        <img
          className="rounded-full border-[1px] border-gray-300"
          alt="avatar"
          src={props.item.avatar}
        />
      </p>
      <p className="ml-2 text-left w-full">{props.item.username}</p>
      <p className="ml-2 text-right font-semibold">{props.item.score}</p>
    </div>
  );
}
