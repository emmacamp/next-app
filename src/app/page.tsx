
// import Link from 'next/link'
import { Title } from '@/components/Title';
import {Button} from '@/components/Button';
// import Data from '@/services/data';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <QueryClientProvider client={queryClient}> */}
        {/* <Title>Hello World</Title> */}
        <Button size="lg">Any text</Button>
        {/* <Link href="/pepe">Go pepe</Link> */}
      {/* </QueryClientProvider> */}
    </main>
  )
}
