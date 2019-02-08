CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, name TEXT);

CREATE TABLE IF NOT EXISTS reviews(id INTEGER PRIMARY KEY, prod_id INTEGER, username TEXT, stars INTEGER, title TEXT, verifiedPurchase INTEGER, helpfulCount INTEGER, body TEXT, avatarLink TEXT, date TEXT, FOREIGN KEY (prod_id) REFERENCES products (id));

CREATE TABLE IF NOT EXISTS comments(id INTEGER PRIMARY KEY, username TEXT, ref_comment_id INTEGER DEFAULT NULL, review_id INTEGER, body TEXT, date TEXT/*, FOREIGN KEY (review_id) REFERENCES reviews (id)*/);

CREATE TABLE IF NOT EXISTS pictures(id INTEGER PRIMARY KEY, review_id INTEGER, url TEXT, FOREIGN KEY (review_id) REFERENCES reviews (id));

CREATE TABLE IF NOT EXISTS videos(id INTEGER PRIMARY KEY, review_id INTEGER, url TEXT, FOREIGN KEY (review_id) REFERENCES reviews (id));
