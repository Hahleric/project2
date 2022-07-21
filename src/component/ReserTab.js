
import InfoTab from './InfoTab';
import DateTab from './DateTab';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function ReserTab() {
    return (
        <Tabs defaultIndex={1}>
            <TabList>
                <Tab>Your Info</Tab>
                <Tab disabled>Time & Date</Tab>
            </TabList>

            <TabPanel>
                <InfoTab />
            </TabPanel>
            <TabPanel>
                <DateTab />
            </TabPanel>
        </Tabs>
    );
}

export default ReserTab;