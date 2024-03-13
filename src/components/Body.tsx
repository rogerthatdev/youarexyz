import { bodoni } from '@/fonts';
export default function Header() {
    return (
        <main>
            <div className={`text-blue-500 ${bodoni.className} antialiased`} style={{ fontSize: 120 }}>YOU ARE</div>
        </main>
    );
  }