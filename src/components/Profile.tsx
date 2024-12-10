import React, { useState } from 'react';

interface TabProps {
  label: string;
  content: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, content }) => {
  return (
    <div>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{label}</h2>
      <div style={{ fontSize: '16px', color: '#555' }}>{content}</div>
    </div>
  );
};

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('studentDetails');

  const tabs = [
    {
      id: 'studentDetails',
      label: 'Details of the Student',
      content: (
        <div>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Age:</strong> 21</p>
          <p><strong>Department:</strong> Computer Science</p>
          <p><strong>Year:</strong> 3rd Year</p>
        </div>
      ),
    },
    {
      id: 'eventDetails',
      label: 'Details of Event Completion or Not',
      content: (
        <div>
          <p><strong>Event Name:</strong> Coding Hackathon</p>
          <p><strong>Status:</strong> Completed</p>
          <p><strong>Submission Date:</strong> 10th December 2024</p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', color: '#ff5722' }}>Profile</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px', borderBottom: '2px solid #ccc' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderBottom: activeTab === tab.id ? '3px solid #ff5722' : 'none',
              backgroundColor: 'transparent',
              fontSize: '16px',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              color: activeTab === tab.id ? '#ff5722' : '#555',
              cursor: 'pointer',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
        {tabs.map((tab) => (
          activeTab === tab.id && <Tab key={tab.id} label={tab.label} content={tab.content} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
