import { Calendar } from './components/Calendar';
import { Icon } from './components/icons';

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Calendar />
      <Icon
        color={'blue'}
        variant={'book'}
        size={'medium'}
        alt={'Calendar icon'}
      />
    </div>
  );
}

export default App;
