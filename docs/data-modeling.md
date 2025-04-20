# データモデリング

# エンティティ

| Entity                      | 主キー                         | 主属性例                                                       | 種別 (Resource / Event) |
| --------------------------- | ------------------------------ | -------------------------------------------------------------- | ----------------------- |
| team                        | team_id                        | name, display_id                                               | Resource                |
| feed                        | feed_id                        | url, etag, last_modified                                       | Resource                |
| content                     | content_id                     | canonical_url, title, type                                     | Resource                |
| feed_item                   | feed_item_id                   | feed_id, content_id, guid, published_at                        | Resource                |
| feed_subscription           | feed_subscription_id           | team_id, feed_id, name                                         | Resource                |
| feed_collection             | feed_collection_id             | team_id, name, description                                     | Resource                |
| feed_collected_subscription | feed_collected_subscription_id | feed_collection_id, feed_subscription_id                       | Resource                |
| destination                 | destination_id                 | team_id, platform, webhook_enc                                 | Resource                |
| delivery_rule               | delivery_rule_id               | subscription_id, destination_id, schedule, template_id, status | Resource                |
| delivery_event              | delivery_event_id              | delivery_rule_id, feed_item_id, sent_at, status, response      | Event                   |
| feed_refresh_event          | refresh_event_id               | feed_id, checked_at, status, response_time_ms                  | Event                   |
