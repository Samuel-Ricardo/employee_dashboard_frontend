import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { INavBarProps } from '../../@types/components/navbar/navbar.props';

export const Navbar = async ({ tabs }: INavBarProps) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map(tab => (
          <Tab key={tab.title}>{tab.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map(tab => (
          <TabPanel key={tab.title}>{tab.body}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
