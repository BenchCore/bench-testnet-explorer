# Bench Testnet Explorer

You can access it at [https://tex.benchcore.io/](http://tex.benchcore).

## Build Setup

### 1. Clone the repository

```bash
git clone https://github.com/benchcore/bench-testnet-explorer && cd bench-testnet-explorer
```

### 2. Install Dependencies

```bash
yarn install
```

### 3.Build For Production

```bash
yarn build:texnet
```

#### Build For GitHub Pages

If you are going to host your explorer instance on GitHub Pages you will need to specify your base url in most cases as GitHub Pages serves repositories from sub-directories instead of sub-domains.

```bash
yarn build --base https://username.github.io/repository/
```

A running instance of the explorer on GitHub Pages can be found at [https://benchcore.github.io/bex-explorer](https://benchcore.github.io/bex-explorer).

> This step is not required if you are hosting the explorer on your "root" repository which is usually your username https://username.github.io/.

#### 3.5 Run Express Server

You can run the explorer as an express server. This makes it a little more light-weight but not needing to have services such as apache or nginx.

```bash
EXPLORER_HOST="127.0.0.1" EXPLORER_PORT="4200" node express-server.js
```

## 4. History Mode

If you wish to remove the `/#/` from your URLs you can follow those steps https://router.vuejs.org/en/essentials/history-mode.html.

### 4.1 Build

```bash
yarn build:texnet --history
```

### 4.2 Development

```bash
yarn dev --env.routerMode=history
```

> Keep in mind that this requires you to run your own server and a running instance of nginx.

## 5. Development

```bash
yarn dev # or yarn dev:texnet
```

#### Change Router Mode

```bash
yarn dev --env.routerMode=history
```

## 6. Testing

``` bash
$ yarn test
```

## Credits

- [Jared Rice Sr.](https://github.com/jaredricesr)
- [Brian Faust](https://github.com/faustbrian)
- [Lúcio Rubens](https://github.com/luciorubeens)
- [Alex Barnsley](https://github.com/alexbarnsley)
- [All Contributors](../../contributors)

## License

[MIT](LICENSE) © [Distributed Webs Project, LLC.](https://dwebs.io)
