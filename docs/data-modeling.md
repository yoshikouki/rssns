# データモデリング

# エンティティ

| Entity                      | 責務 (役割・存在理由)                                                                | 種別 (Resource / Event) |
| --------------------------- | ------------------------------------------------------------------------------------ | ----------------------- |
| team                        | SaaS テナント境界を表す組織または個人。すべての設定・権限の最上位単位                | Resource                |
| feed                        | 外部フィード情報源 (RSS/Atom)。URL をキーに一意管理しキャッシュを共有                | Resource                |
| content                     | フィードが指す実体コンテンツ (記事・動画・リポジトリなど)。正規 URL で一意化         | Resource                |
| feed_item                   | Feed 内の単一エントリ。feed と content を結び公開メタ (GUID, published_at) を保持    | Resource                |
| feed_subscription           | Team が特定 Feed を購読する設定。後続ルーティングの起点                              | Resource                |
| feed_collection             | Team 内で複数 Subscription を束ねる論理グループ (例: #frontenders)                   | Resource                |
| feed_collected_subscription | feed_collection と feed_subscription のメンバーシップを表す中間リソース              | Resource                |
| destination                 | Team 専有の通知先エンドポイント (Discord/Slack/LINE など) とシークレット情報         | Resource                |
| delivery_rule               | feed_subscription と destination を結び、スケジュール・テンプレなど配信条件を定義    | Resource                |
| delivery_event              | delivery_rule が発火し、単一 feed_item を送信した結果 (成功/失敗・レスポンス) を記録 | Event                   |
| feed_refresh_event          | Feed の更新チェックを実行した出来事。レスポンス時間やステータスを記録                | Event                   |
