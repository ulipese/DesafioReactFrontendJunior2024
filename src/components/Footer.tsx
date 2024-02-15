export default function Footer() {
  return (
    <footer className="main__footer">
      <p className="footer__edit">Double-click to edit a todo</p>
      <p className="footer__credits">
        <p className="credits__credit">
          Template by <span className="credits__strong">Sindre Sorhus</span>
        </p>
        <p className="credits__credit">
          Created by <span className="credits__strong">Chau Tran</span>
        </p>
        <p className="credits__credit">
          Utilized <span className="credits__strong">XState</span> by{' '}
          <span className="credits__strong">David K.</span>
        </p>
        <p className="credits__credit">
          Part of <span className="credits__strong">TodoMVC</span>
        </p>
      </p>
    </footer>
  );
}
