import React from 'react';
import { useParams, Link } from 'react-router-dom';

const DummyPage = () => {
  const { pageName } = useParams();

  const formatTitle = (slug) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="text-center p-10 bg-white rounded-lg shadow">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {formatTitle(pageName)}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a dummy page for the "{formatTitle(pageName)}" functionality.
      </p>
      <Link to="/" className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        &larr; Back to Dashboard
      </Link>
    </div>
  );
};

export default DummyPage;