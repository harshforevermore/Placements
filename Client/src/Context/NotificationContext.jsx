import React, {useContext, createContext, useState} from 'react';
import Notification from '../Components/Notification/Notification';


const NotificationContext = createContext();
export const useNotification = () => useContext(NotificationContext);

const NotificationProvider = ({children}) => {
    const [notification, setNotification] = useState({message: "", status: "", visible: false});
    const showNotification = (message, status, timeout=3000) => {
        setNotification({message, status, visible: true});
        setTimeout(() => {
            setNotification({message: "", status: "", visible: false});
        }, timeout);
    }
  return (
    <NotificationContext.Provider value={{showNotification}}>
        {children}
        {
            notification.visible && <Notification notificationText={notification.message} status={notification.status} />
        }
    </NotificationContext.Provider>
  )
}

export default NotificationProvider;