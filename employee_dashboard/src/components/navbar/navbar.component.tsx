import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { INavBarProps } from '../../@types/components/navbar/navbar.props';

export const Navbar = async ({ tabs }: INavBarProps) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="red" paddingX={1}>
      <TabList backgroundColor="#FFF" paddingX={2} borderRadius="0.75rem">
        {tabs.map(tab => (
          <Tab key={tab.title} marginY={2}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels paddingX={2}>
        {tabs.map(tab => (
          <TabPanel key={tab.title}>{tab.body}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
