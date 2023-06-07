import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

function AssetsPage() {
  const assets = [
    { id: 1, company: 'Subway', attestation: 'Silver Members' },
    { id: 2, company: 'Subway', attestation: 'Valued Customer Badge' },
    { id: 3, company: 'Joe & The Juice', attestation: 'Gold Members' },
  ];

  const companyGroups = assets.reduce((groups, asset) => {
    if (!groups[asset.company]) {
      groups[asset.company] = [];
    }
    groups[asset.company].push(asset.attestation);
    return groups;
  }, {});

  return (
    <>
      <Header />
      <div className="assets-page">
        <h1>Assets</h1>
        {Object.entries(companyGroups).map(([company, attestations]) => (
          <div key={company} className="company-section">
            <div className="asset-company-info">
            <img className="asset-company-logo" src="assets/placeholder-image.jpg" alt="Placeholder" />
              <h2 className="asset-company-name">{company}</h2>
            </div>
            <div className="attestations-container">
              {attestations.map((attestation, index) => (
                <div key={index} className="attestation-rectangle">
                  <div className="membership">{attestation}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="separator"></div>

      <NavBar />
    </>
  );
}

export default AssetsPage;
