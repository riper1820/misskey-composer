# Misskey Compose

Misskeyの(ほぼ)全てを[Docker Compose](https://docs.docker.com/compose/)で構築するやつ

## 要件

### サーバー

- ポート80、443が解放されているサーバー
- Docker Compose

### その他
- [Cloudflare](https://www.cloudflare.com/ja-jp/)のアカウント
- [Amazon S3](https://aws.amazon.com/jp/s3/) のバケット (もしくは互換性のあるオブジェクトストレージ)
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

### Docker Composeを起動

`docker-compose up -d`