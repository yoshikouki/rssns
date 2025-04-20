ユーザーストーリー: "As …, I want …, so that …" 形式

Scope: 3 段階 = 必須 (MVP) / 推奨 (v1+) / 十分 (vFuture)

## ユーザーストーリー
ユーザーストーリー Scope 受け入れ条件（Done の最小確認）

### 1
> As a team admin,
> I want to 登録した RSS Feed を特定の Discord チャンネルへ自動投稿
> so that 情報共有を自動化できる
Scope: 必須
受け入れ条件: Feed URL・Webhook URL を入力→最新1件が投稿される／以降ポーリング#で新着のみ投稿

### 2
> As a team admin,
> I want to 複数の Feed を 1 App に紐付け
> so that Bot を乱立させず運用したい
Scope: 必須
受け入れ条件: App (=Bot Token) に対して Feed が N:1 で登録できる

### 3
> As a team member,
> I want Feed ごとに Discord チャンネルを切り替え
> so that 話題をチャンネル別#に整理できる
Scope: 必須
受け入れ条件: Feed⇔Channel マッピングが UI/CLI で編集できる

### 4
> As an operator,
> I want 投稿テンプレートを Markdown / Embed でカスタム
> so that 可読性とブランド統一ができる
Scope: 推奨
受け入れ条件: 変数 (title, link, publishedAt …) を置換できるテンプレート保存＆プレビ#ュー

### 5
> As a DevOps engineer,
> I want チーム単位の RBAC (Owner / Maintainer / Viewer)
> so that 誤操作を#防ぎつつ権限委譲できる
Scope: 推奨
受け入れ条件: 3 ロールがあり、UI と API で制御。監査ログに残る

### 6
> As a user,
> I want フィード項目をキーワード or 正規表現でフィルタ
> so that 不要ノイズを除外した#い
Scope: 推奨
受け入れ条件: AND/OR 条件、テストプレビューが可能

### 7
> As a product owner,
> I want Slack / Microsoft Teams 等の他チャネルにも配信先を拡張
> so that マ#ルチプラットフォームに対応したい
Scope: 十分
受け入れ条件: Provider 抽象レイヤ実装＋UI で追加できる

### 8
> As an admin,
> I want Delivery 成功/失敗をダッシュボードでモニタ
> so that エラー検知と再送が容易#になる
Scope: 推奨
受け入れ条件: 日次成功率％・失敗ログ一覧・手動再送ボタン

### 9
> As a team admin,
> I want to 一時停止 / 再開 / 手動即時配信
> so that 運用フレキシビリティを確保#できる
Scope: 推奨
受け入れ条件: Delivery 状態フラグと Now Push ボタン

### 10
> As an auditor,
> I want すべての設定変更と配信アクションを追跡可能に
> so that 内部統制を満たせる
Scope: 十分
受け入れ条件: 監査テーブル (who, when, what‑before/after)＋エクスポート

### 11
> As a security officer,
> I want Webhook URL や Bot Token を暗号化保管
> so that 漏えいリスクを下#げたい
Scope: 必須
受け入れ条件: KMS/Secret Manager で保存、平文表示不可

### 12
> As an admin,
> I want SLA を守るためにレイテンシ指標を計測
> so that リソースをスケールできる
Scope: 十分
受け入れ条件: p50/p95 投稿遅延メトリクス＋Prometheus exporter

### 13
> As a developer,
> I want GraphQL / REST API で CRUD 可能
> so that UI 以外からも拡張しやすい
Scope: 推奨
受け入れ条件: OpenAPI/GraphQL schema 公開、アクセストークン認証

### 14
> As a user,
> I want 新着チェック間隔を Feed ごとに設定 (cron/秒単位)
> so that 速報性とリクエスト#数を調整できる
Scope: 推奨
受け入れ条件: 分解能: 1 min; UI に nextRun カウントダウン表示

### 15
> As a growth analyst,
> I want クリック計測用の UTM 自動付与
> so that 流入分析が行える
Scope: 十分
受け入れ条件: ?utm_source=… を自動挿入／除外オプション



## MVP 完了の定義
- チームが Feed を登録し、Bot1 で複数チャンネルに配信できる
- セキュアにトークン保管 & 配信成功率をログで確認できる
