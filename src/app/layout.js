import './globals.css'; // Import global styles
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import ChapterGrid from '../../components/Chapters';
import Order from '../../components/Order';
import Merch from '../../components/Merch';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import { Poppins, Philosopher } from 'next/font/google'; 


const poppins = Poppins({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',     
});

const philosopher = Philosopher({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-philosopher',     
});


export default function Layout() {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${philosopher.variable}`}>
        <Header />
        <Hero />
        <About />
        <ChapterGrid />
        <Order />
        <Merch />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
