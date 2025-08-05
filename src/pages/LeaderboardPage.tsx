import React from 'react';
import Leaderboard from '../components/Leaderboard';
import ScrollToTop from '../components/ScrollToTop';

export default function LeaderboardPage() {
  return (
    <>
      <ScrollToTop />
      <div className="mb-16 flex flex-col text-center items-center justify-center">
        <h1 className='text-4xl font-semibold my-16 text-gray-900'>Games leaderboard</h1>
        <Leaderboard />
      </div>
    </>
  );
}