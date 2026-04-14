export type RootStackParamList = {
  // The main tab navigator container 
  HomeTabs: undefined;

  // The Contact detail screen expects a contact object
  ContactDetail: { 
    contact: { 
      id: string; 
      name: string; 
      phone: string; 
      email: string 
    } 
  };
};

// For bottom tab navigator screen types 
export type TabParamList = {
  Home: undefined;
  Contacts: undefined;
  Schedule: undefined;
  NoticeBoard: undefined;
  CampusMap: undefined;
};