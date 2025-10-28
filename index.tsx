import '../App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Help from './components/body/help/Help'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="py-16 gap-16">
        <Hero />
        <Benefits />
        <HowItWorks />
        <br />
        <br />
        <Help />
      </main>
      <Footer />
    </div>
  )
}
