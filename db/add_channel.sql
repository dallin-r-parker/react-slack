insert into slack_channels (channel_name, users_channels)
 values ($1, $2) returning *;