# challenge-gold
Binar Full Stack Web Dev Gold Challenge


Skenario :
Ada 3 table yaitu :
1. users
2. hotels
3. rooms
4. booking

relasi : 

one to many : 

1. User - Booking

user dapat melakukan banyak booking, tetapi booking hanya dimiliki oleh satu user

2. Hotel - Room 
Setiap hotel memiliki banyak room, tetapi satu room hanya dimiliki oleh satu hotel

one to one :

1. Booking - Room
setiap booking hanya terkait dengan satu room


Table User :

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

Table Hotel : 

CREATE TABLE hotels (
    hotel_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    rating DECIMAL(3, 2) DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

Table Rooms :

CREATE TABLE rooms (
    room_id SERIAL PRIMARY KEY,
    hotel_id INT REFERENCES hotels(hotel_id),
    room_number VARCHAR(10) NOT NULL,
    room_type VARCHAR(50),
    price DECIMAL(8, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);


Tabel Booking : 

CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    room_id INT REFERENCES rooms(room_id),
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    guests_count INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT current_timestamp,
    updated_at TIMESTAMP DEFAULT current_timestamp
);
