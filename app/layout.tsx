import './globals.css';
import Chatbot from './components/Chatbot';

export const metadata = {
  title: 'Asish Kumar Dalal | ML Developer & Solo Founder',
  description: 'Personal portfolio of Asish Kumar Dalal showcasing AI/ML projects and solo-engineered software.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
