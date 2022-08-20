const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");
import styles from './tailwind.css'

export const links = () => [{ rel: 'stylesheet', href: styles}]

export const meta = () => ({
  charset: "utf-8",
  title: "PokeRemix | DevPoint",
  viewport: "width=device-width,initial-scale=1",
  
});


export default function App() {
  let myHeaders = new Headers();

  myHeaders.set('Access-Control-Allow-Origin', '*')
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
