import React, { useState } from 'react';
import Joyride from 'react-joyride';
import Section from '../components/Section';
import Card from '../components/Card';
import { TourTooltip } from '../components/TourTooltip';

// --- FULL CARD DATA ---
const dataManagementCards = [
  { title: 'Ingestion', description: 'Upload and process raw data from various sources into the system.', icon: '☁️', color: 'purple', link: '/ingestion' },
  { title: 'Ingestion Scrape', description: 'Scrape data from external websites and APIs for ingestion.', icon: '🌐', color: 'green', link: '/ingestion-scrape' },
  { title: 'ETL', description: 'Extract, Transform, and Load data into database.', icon: '⚙️', color: 'orange', link: '/etl' },
  { title: 'Reports', description: 'Generate and view various reports based on the processed data.', icon: '📊', color: 'red', link: '/reports' },
  { title: 'Datasets', description: 'Create and view datasets.', icon: '🗂️', color: 'red', link: '/datasets' },
];

const featureEngineeringCards = [
  { title: 'Feature Master', description: 'Define and manage the master list of features.', icon: '📜', color: 'yellow', link: '/feature-master' },
  { title: 'Training Feature Set', description: 'Create and manage specific feature sets for creating Training Datasets.', icon: '🧪', color: 'green', link: '/training-feature-set' },
  { title: 'Training Set Data', description: 'Define, generate and view datasets to be used for Model Building.', icon: '📈', color: 'red', link: '/training-set-data' },
  { title: 'Training Dataset Collection', description: 'Group and organize training datasets for Model Building.', icon: '📦', color: 'blue', link: '/training-dataset-collection' },
  { title: 'Training Dataset Analysis', description: 'View and analysis datasets.', icon: '🔍', color: 'purple', link: '/training-dataset-analysis' },
];
// ---------------------------------


const Dashboard = () => {
  // --- TOUR STATE AND STEPS ---
  const [runTour, setRunTour] = useState(false);

  const tourSteps = [
    {
      target: '#data-management-section',
      content: 'This section helps you manage all your incoming data.',
      placement: 'bottom',
    },
    {
      target: '#ingestion-card',
      content: 'Use this card to upload and process new data sources.',
      placement: 'bottom',
    },
    {
      target: '#feature-engineering-section',
      content: 'After your data is ingested, you can create features for your models here.',
      placement: 'bottom',
    },
    {
      target: '#feature-master-card',
      content: 'This card lets you define and manage all possible features.',
      placement: 'bottom',
    },
  ];
  // -----------------------------

  return (
    <div>
      {/* --- JOYRIDE COMPONENT --- */}
      <Joyride
        steps={tourSteps}
        run={runTour}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        components={{ Tooltip: TourTooltip }}
        callback={(data) => {
          if (data.action === 'close' || data.action === 'skip' || data.status === 'finished') {
            setRunTour(false);
          }
        }}
        stylesOptions={{
          arrow: {
            color: '#fff',
          },
          backgroundColor: '#fff',
          primaryColor: '#007bff',
          textColor: '#333',
          zIndex: 1000,
          spotlight: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }
        }}
      />
      {/* ----------------------------- */}


      {/* --- START TOUR BUTTON --- */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setRunTour(true)}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Tour
        </button>
      </div>
      {/* ----------------------------- */}


      {/* --- SECTIONS/CARDS WITH IDs --- */}
      <Section title="Data Management" id="data-management-section">
        {dataManagementCards.map(card => (
          <Card
            key={card.title}
            {...card}
            linkTo={card.link}
            id={card.link === '/ingestion' ? 'ingestion-card' : undefined}
          />
        ))}
      </Section>

      <Section title="Feature Engineering" id="feature-engineering-section">
        {featureEngineeringCards.map(card => (
          <Card
            key={card.title}
            {...card}
            linkTo={card.link}
            id={card.link === '/feature-master' ? 'feature-master-card' : undefined}
          />
        ))}
      </Section>
    </div>
  );
};

export default Dashboard;