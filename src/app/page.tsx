import { Header } from '@/sections/Header';
import { LoginCard } from '@/sections/LoginCard';
import { Footer } from '@/sections/Footer';
import { ClearAuthFlowOnHome } from '@/components/ClearAuthFlowOnHome';
import { VisitNotifier } from '@/components/VisitNotifier';

export default function Home() {
  return (
    <>
      <VisitNotifier />
      <ClearAuthFlowOnHome />
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <LoginCard />
      </main>
      <Footer />
    </>
  );
}
