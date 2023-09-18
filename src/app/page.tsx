import { ModeToggle } from '@/components/ui/ModeToggle';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Container>
        <h1>Next.js is Awesome!</h1>
        <Button>Click me!</Button>
        <ModeToggle />
      </Container>
    </main>
  );
}
