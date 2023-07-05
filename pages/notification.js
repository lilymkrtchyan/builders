import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

export default function Notifications() {
  const notifs = [
    { id: 1, company: 'Subway', message: 'You just obtained', reward: '+1 Visit' },
    { id: 2, company: 'Subway', message: 'Congratulations you just earned Silver Member Badge!', reward: 'assets/subway-membership.png', membership: 'Silver Members' },
    { id: 3, company: 'Subway', message: 'You just obtained', reward: '+1 Visit' },
  ];

  const isImagePath = (value) => {
    const imageExtensions = ['.png', '.jpg', '.jpeg'];
    return imageExtensions.some(extension => value.toLowerCase().endsWith(extension));
  };

  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleAcceptNotification = (notificationId) => {
    setSelectedNotification(notificationId);
  };

  return (
    <>
      <div className='notification-header'>
        <h1 className='word-notifications'>Notifications</h1>
        <a href='/discover'><MdClose className="close-icon" /></a>
      </div>
      <div className="separator"></div>

      {notifs.map((notification, index) => (
        <React.Fragment key={notification.id}>
          <div className="notification-section">
            <div className="company-info">
              <img className="company-logo" src="assets/placeholder-image.jpg" alt="Company Logo" />
              <h3 className="company-title">{notification.company}</h3>
            </div>
            <p className="notification-message">{notification.message}</p>

            {isImagePath(notification.reward) ? (
              <div className="notification-reward-container">
                <img className="reward-image" src={notification.reward} alt="Reward" />
                <div className='notification-company-info'>
                  <img className='notification-company-logo' src='assets/placeholder-image.jpg' alt="Company Logo" />
                  <p className='notification-company-name'>{notification.company}</p>
                </div>
                {notification.membership && (
                  <p className="notification-membership">{notification.membership}</p>
                )}
              </div>
            ) : (
              <p className="notification-reward">{notification.reward}</p>
            )}

            <div className="notification-actions">
              <button className="notification-decline">Decline</button>
              <button className="notification-accept" onClick={() => handleAcceptNotification(notification.id)}>Accept</button>
            </div>
          </div>

          {index !== notifs.length - 1 && <div className="notif-separator"></div>}
        </React.Fragment>
      ))}

      {selectedNotification && (
        <div>
          {}
        </div>
      )}
    </>
  );
}
