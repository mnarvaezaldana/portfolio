export const metadata = {
  title: "Career & Technology",
  description: "Professional career and technology vocabulary activity",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h1>My Professional Career</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#essay">Academic Text</a>
            <a href="#activity">Activity</a>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <p>© 2026 Career Website</p>
        </footer>
      </body>
    </html>
  );
}
