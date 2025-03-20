import Select, { SingleValue } from 'react-select';
import { GameSelectProps } from '../types/leaderboard.interface';
  
export default function GameSelect(props: GameSelectProps) {
    const handleChange = (option: SingleValue<string>) => {
        if (option) {
            props.setSelectedGame(option);
        }
    };

    return (
        <Select
            value={props.selectedGame}
            onChange={handleChange}
            getOptionLabel={(option: string) => option}
            getOptionValue={(option: string) => option}
            options={props.options}
            isClearable={false}
            backspaceRemovesValue={true}
            placeholder={'Select a game'}
            defaultValue={props.options[0]}
        />
    );
}