INSERT INTO slack_users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) returning *
