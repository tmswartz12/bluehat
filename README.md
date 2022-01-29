# BlueHat

## Getting Started - Setup && Pre Req's

- install node on your machine [download link](https://nodejs.org/en/download/)
- setup homebrew [setup instructions] (https://brew.sh/)
- install mongodb
 - `brew tap mongodb/brew`
 - `brew install mongodb-community@5.0`
 - optional: install mongodb compass GUI [download link](https://www.mongodb.com/products/compass)


Once you are added to the team repo, pull down the codebase and add a `.env` file at the root.

Contact Tyler for access to envkey and copy and paste the `ENVKEY` string in the `.env` file

Make sure MongoDb is running.

```
brew services start mongodb-community
```

## Spin it up!!!

```
npm run install

npm run start-dev

```

## Deployment

## Migrations

Start command
```
./node_modules/.bin/migrate create <migration-name> --es6 -d mongodb://localhost:27017/bluehat-db
```

Up command
```
./node_modules/.bin/migrate up --es6 -d mongodb://localhost:27017/bluehat-db
```

Down command
```
./node_modules/.bin/migrate down <migration-name> --es6 -d mongodb://localhost:27017/bluehat-db
```


## Testing

## Additional References

