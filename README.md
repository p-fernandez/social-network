# How to install

Just execute the bash script `install.sh` if you have `yarn` installed globally.
If not, install manually the root project and then the backend and the frontend with `npm install`.

Note: `engines` attribute is set to `node` version `10.7.0` because of the `bcrypt` package. If you try to install it with LTS (currently, 8.11.4) it fails. Also with previous versions of the LTS.

# How to run it
First there will be needed two environment files:
`./backend/default.env`
```
PORT=3001

SALT_ROUNDS=10
CLIENT_KEY=
TOKEN_LIFE=

DB_USER=
DB_PWD=
DB_HOST=
DB_NAME=
```
(Values for DB fields will be provided)

`./frontend/.env`
```
REACT_APP_BACKEND_URL=http://localhost:3001
REACT_APP_CLIENT_KEY=
REACT_APP_TIMEOUT=10000
```

- Considerations:
CLIENT_KEY and REACT_APP_CLIENT_KEY need to match.
PORT and port provided in REACT_APP_BACKEND_URL need to match.

After setting up the environment files, just:
`yarn start:dev` (or `npm run start:dev`)

Frontend will be deployed in the standard location: `http://localhost:3000`.
Backend will be deployed in the configured location.



