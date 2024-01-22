import Navigation from "../navigation";

export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <footer>
        <Navigation />
      </footer>
    </>
  );
}
