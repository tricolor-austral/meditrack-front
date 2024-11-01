import { Button } from './components/Button';

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex space-x-4">
        <Button size="sm" variant="solid" colorType="primary">
          Small
        </Button>
        <Button size="md" variant="solid" colorType="secondary">
          Medium
        </Button>
        <Button size="lg" variant="outline" colorType="error">
          Large
        </Button>
        <Button size="lg" variant="solid" colorType="error" disabled={true}>
          Disabled
        </Button>
      </div>
    </div>
  );
}

export default App;
