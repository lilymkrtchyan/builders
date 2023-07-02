export default function NavBar() {
  return (
    <footer>
      <div className="footer-content">
        {/* other content in the footer */}
      </div>

      <nav className="footer-nav">
        <ul>
          <li>
            <a href="/">Rewards</a>
          </li>
          <li>
            <a href="/badges">Badges</a>
          </li>
          <li>
            <a href="/discover">Discover</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
