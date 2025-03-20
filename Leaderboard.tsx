import LeaderboardItem from './LeaderboardItem';
import GameSelect from './GameSelect';
import { useState, useEffect } from 'react';
import { Player } from "../types/leaderboard.interface";

function onClick() {
    console.log('Show next 10 players')
}

export default function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [games, setGames] = useState<string[]>([]);
  const [selectedGame, setSelectedGame] = useState("daily");

  useEffect(() => {
    fetch('https://api.chess.com/pub/leaderboards')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGames(Object.entries(data).map((item) => item[0]));
        setPlayers(data[selectedGame].slice(0, 10));
      });
  }, [selectedGame]);

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center w-full max-w-[25rem] bg-[#0B6E77] shadow-md border-[1px] border-gray-300 rounded-[10px]" >
      <div className="p-8 border-b-[1px] border-gray-400 w-full flex flex-col items-center justify-center">
        <div className='flex items-center justify-between w-full mb-2'>
            <img alt="icon" src="star_icon.svg" />
            <p className="text-[#DAF1D6] font-bold uppercase text-2xl">Leaderboard</p>
            <img alt="icon" src="star_icon.svg" />
        </div>
        <div className='w-full text-left'>
          <div className='mb-3 text-[#DAF1D6] text-center'>for</div>
          <GameSelect selectedGame={selectedGame} setSelectedGame={setSelectedGame} options={games} />
        </div>
      </div>
      <div className="w-full p-4">
        { players.map((item, index) => <LeaderboardItem key={index} item={item} />) }
      </div>
      <div className="border-t-[1px] border-gray-400 w-full bg-white py-8">
        <button onClick={onClick} className='text-[#8c8c8c] font-semibold uppercase border-gray-400 border-[1px] px-8 py-2 rounded-3xl hover:bg-slate-100 hover:font-bold'>
            Show next 10 players
        </button>
      </div>
    </div>
  );
}
