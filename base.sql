CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    --
    login TEXT NOT NULL,
    password TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE product_types(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL,
    icon TEXT NOT NULL,
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP 
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL, 
    description TEXT NOT NULL, 
    price FLOAT NOT NULL, 
    oldprice FLOAT NOT NULL, 
    type_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES product_types(id),
    filter_item_id INT NOT NULL,
    FOREIGN KEY (filter_item_id) REFERENCES product_filter_items(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP    
);

CREATE TABLE basket_items(
    id SERIAL PRIMARY KEY,
    --
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    count INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  
);

CREATE TABLE product_images(
    id SERIAL PRIMARY KEY,
    --
    src TEXT NOT NULL,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP  
);

CREATE TABLE product_filters(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL,
    type_id INT NOT NULL,
    FOREIGN KEY (type_id) REFERENCES product_types(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP    
);

CREATE TABLE product_filter_items(
    id SERIAL PRIMARY KEY,
    --
    title TEXT NOT NULL,
    filter_id INT NOT NULL,
    FOREIGN KEY (filter_id) REFERENCES product_filters(id),
    --
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP    
);