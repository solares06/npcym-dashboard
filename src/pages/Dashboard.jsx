import React from 'react';
import Section from '../components/Section';
import Card from '../components/card';

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

const Dashboard = () => {
  return (
    <div>
      <Section title="Data Management">
        {dataManagementCards.map(card => (
          <Card key={card.title} {...card} linkTo={card.link} />
        ))}
      </Section>
      <Section title="Feature Engineering">
        {featureEngineeringCards.map(card => (
          <Card key={card.title} {...card} linkTo={card.link} />
        ))}
      </Section>
    </div>
  );
};

export default Dashboard;