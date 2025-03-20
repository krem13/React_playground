import Leaderboard from './components/Leaderboard';

export default function App() {
  return (
    <div className="mb-16 flex flex-col text-center items-center justify-center">
      <h1 className='text-4xl font-semibold my-16 text-gray-900'>Games leaderboards</h1>
      <Leaderboard />
    </div>
  );
}
