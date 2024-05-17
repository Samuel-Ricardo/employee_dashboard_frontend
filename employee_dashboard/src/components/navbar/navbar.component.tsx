import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

export const Navbar = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>Create</Tab>
        <Tab>Edit</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Home</p>
        </TabPanel>
        <TabPanel>
          <p>Create</p>
        </TabPanel>
        <TabPanel>
          <p>Edit</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
