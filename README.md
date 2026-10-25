# Misskey Composer

Misskeyの(ほぼ)全てを[Docker Compose](https://docs.docker.com/compose/)で構築するやつ

## 要件

### サーバー

- ポート80、443が解放されているサーバー
- Docker Compose

### その他
- [Cloudflare](https://www.cloudflare.com/ja-jp/)のアカウント
- 独自ドメイン

## 手順



### CloudFlareの設定

[Cloudflare](https://www.cloudflare.com/ja-jp/)のアカウントを作成してください。

#### 初期設定

取得したドメイン (以下は例示のために `example.com` を想定)をCloudflareで使えるようにしてください。

おそらく `example.com` のCNAMEレコードの編集が必要です。

#### DNS

以下のAレコードを追加してください。

- Misskey本体用: (例) `mi.example.com` -> サーバーのIPv4アドレス
- メディア用: (例) `mi-media.example.com` -> サーバーのIPv4アドレス

#### SSL

SSL/TLS -> Overview -> Full(Strict) を選択

#### キャッシュ

`mi.example.com/api/*` 以外はキャッシュ可能です。

Caching -> Cache Rules からキャッシュルールを設定してください。

1番目に全てをキャッシュするルール、2番目に `mi.example.com/api/*` をバイパスするルールを作ると良さそうです。

### FWの設定

ポート80、443が解放されていない場合は解放してください。

`ufw` を使う場合は `scripts/fw.sh` でセット可能です。

### 環境変数の設定

`.env.example` を `.env` にコピーし、環境変数を `.env` に指定してください。

### cloudflare.iniの準備

CloudFlareの [APIトークン](https://dash.cloudflare.com/profile/api-tokens) を発行してください。

`cloudflare.ini` に以下のフォーマットでAPIトークンを記載してください。

```
dns_cloudflare_api_token=your_api_token
```

### Cloudflare R2の準備 (任意)

オブジェクトストレージとしてCloudflare R2を使用する場合の設定

#### バケットを準備

Cloudflareのダッシュボードで "R2 Object Storage" を選択、バケットを作成する

#### カスタムドメインの設定

バケットの設定画面からバケットのカスタムドメインを設定する。 `r2.example.com` とした場合、環境変数`STORAGE_HOST`に`r2.example.com` を設定

#### APIトークンの設定

"R2 Object Storage" を選択し、 `API` ボタンからAPIトークンを弱行する。「オブジェクト読み取りと書き込み」の権限が必要

発行されたトークンはMisskeyのオブジェクトストレージ設定で使用する。

### Docker Composeを起動

`docker-compose up -d`

## チューニング

### postgresql.conf

省メモリ環境に最適化した設定になっています。適宜調整してください

## アプデ

misskey / postgresの手動マイグレーション手順がある場合は別途実施しておくこと

### イメージ更新 & 再起動

```
docker compose down
docker compose up -d
```
