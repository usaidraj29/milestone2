// app/navbar/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/aboutus">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
