Dette er en port av Pacman basert på [bward2 sin implementasjon](https://github.com/bward2/pacman-js/tree/master), tiltenkt å bli spilt på storskjermen i resepsjonen.

Prosjektet er en standard next-app, og alle assets, lyder, musikk og spillet er portert for enkel lokalutvikling. Besøk `localhost:3000/game/` for å besøke spillet. Koden for spillet ligger i `src/game`.

En grei måte å løse problemstillingen med å styre spillet eksternt kan være via en socket-server. I `src/game/core/gameCoordinator.js:735` finnes metoden for å endre retning på Pacman, som kan kalles med riktig retning via en socket-message. Spillet startes i `src/game/core/gameCoordinator.js:153`.
