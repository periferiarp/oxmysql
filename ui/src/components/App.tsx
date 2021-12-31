import { Center, Box } from '@chakra-ui/react';
import { debugData } from '../utils/debugData';
import TopBar from './NavBars/TopBar';
import LeftBar from './NavBars/LeftBar';
import { Routes, Route } from 'react-router-dom';
import Resource from './Resource';
import RightBar from './NavBars/RightBar';
import MainContent from './MainContent';

debugData([
  {
    action: 'setVisible',
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <Center w="100%" h="100%">
      <Box width="60%" height="60%" backgroundColor="#191E26" borderRadius="1vh" color="white" fontFamily="Poppins">
        <TopBar />
        <LeftBar />
        <RightBar />
        <MainContent>
          <Routes>
            <Route path="/:resource" element={<Resource />} />
          </Routes>
        </MainContent>
      </Box>
    </Center>
  );
};

export default App;
