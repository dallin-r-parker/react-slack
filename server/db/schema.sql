CREATE TABLE slack_users (
  user_id SERIAL PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email text,
  password text
);

CREATE TABLE slack_channels (
  channel_id int REFERENCES slack_users(user_id),
  channel_message_id int REFERENCES slack_messages(message_id),
  channel_name text
);

CREATE TABLE slack_messages (
  message_id int REFERENCES slack_channels(channel_id),
  message text,
  message_timestamp text
);
