import LeaderboardItem from './LeaderboardItem';
import CustomSelect from './CustomSelect';
import { useState, useEffect } from 'react';
import { Player } from "../types/leaderboard.interface";

export default function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [visiblePlayers, setVisiblePlayers] = useState<Player[]>([]);
  const [games, setGames] = useState<string[]>([]);
  const [selectedGame, setSelectedGame] = useState('');
  const [disabledButton, setDisabledButton] = useState(false);

  let bgcolor = '#0B6E77';

  function onClick() {
    if (visiblePlayers.length < 10 || visiblePlayers.length + 10 >= players.length) {
      setDisabledButton(true);
      setVisiblePlayers(players);
    } else {
      setDisabledButton(false);
      setVisiblePlayers(players.slice(0, visiblePlayers.length + 10));
    }
  }

  useEffect(() => {
    try {
    fetch('https://api.chess.com/pub/leaderboards')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (Object.entries(data).length > 0) {
          setGames(Object.entries(data).map((item) => item[0]));
        }
        if (selectedGame && data[selectedGame]) { 
          setPlayers(data[selectedGame]);
          setVisiblePlayers(data[selectedGame].slice(0, 10));
        }
      });
    } catch (error) {
      console.log('Error fetching data: ', error);
    }
  }, [selectedGame]);

  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center w-full max-w-[25rem] shadow-md border-[1px] border-gray-400 rounded-[10px]" style={{backgroundColor: bgcolor }} >
      <div className="p-8 border-b-[1px] border-gray-400 w-full flex flex-col items-center justify-center">
        <div className='flex items-center justify-between w-full mb-4'>
            <img alt="icon" src="star_icon.svg" />
            <p className="text-[#DAF1D6] font-bold uppercase text-2xl">Leaderboard</p>
            <img alt="icon" src="star_icon.svg" />
        </div>
        <div className='mb-3 text-[#DAF1D6] text-center font-bold'>for</div>
        <div className='w-full text-left mt-2'>
          <CustomSelect
            options={games}
            value={selectedGame}
            onChange={setSelectedGame}
          />
        </div>
      </div>
      <div className="w-full p-4">
        { selectedGame !== '' &&
          visiblePlayers.map((item, index) => <LeaderboardItem key={index} item={item} />)
        }
        { selectedGame === '' && 
          <p className='text-white text-xl p-20'>You have to choose a game to see the players leaderboard.</p>
        }
      </div>
      <div className="w-full bg-white py-8">
        <button
          onClick={onClick}
          disabled={disabledButton}
          className={`font-semibold uppercase border-gray-400 border-[1px] px-8 py-2 rounded-3xl
            ${disabledButton
              ? 'text-gray-400 bg-gray-200 cursor-not-allowed'
              : 'text-[#8c8c8c] hover:bg-slate-100 hover:font-bold'}
          `}
        >
          Show next 10 players
        </button>
      </div>
    </div>
  );
}
