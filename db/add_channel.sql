insert into slack_channels (channel_id, channel_name)
 values ($1, $2) returning *;