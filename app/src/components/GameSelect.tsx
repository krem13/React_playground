import React from 'react';
import Select from 'react-select';
import { GameSelectProps } from '../types/leaderboard.interface';
  
export default function GameSelect<Option>(props: GameSelectProps<Option>) {
    const games = [
        "daily",
        "daily960",
        "live_rapid",
        "live_blitz",
        "live_bullet",
        "live_bughouse",
        "live_blitz960",
        "live_threecheck",
        "live_crazyhouse",
        "live_kingofthehill",
        "tactics",
        "rush",
        "battle"
    ] as Option[];
    
    console.log('games: ', props.options as Option[]);
    console.log('selected game: ', props.selectedGame);
    
    const handleChange = (option: Option | null) => {
        console.log('selected game in: ', option);
        if (option) {
            props.setSelectedGame(option);
        }
    };

    return (
        <Select
            options={games}
            onChange={handleChange}
            placeholder={'Select a game'}
        />
    );
}