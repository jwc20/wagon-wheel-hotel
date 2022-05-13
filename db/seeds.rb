# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
#
#

g1 = Guest.create(first_name: "g1_firstname", last_name: "g1_lastname", email: "g1_email", phone: "111-111-1111", address: "g1 address", details: "g1 details")
g2 = Guest.create(first_name: "g2_firstname", last_name: "g2_lastname", email: "g2_email", phone: "222-222-2222", address: "g2 address", details: "g2 details")
g3 = Guest.create(first_name: "g3_firstname", last_name: "g3_lastname", email: "g3_email", phone: "333-333-3333", address: "g3 address", details: "g3 details")
g4 = Guest.create(first_name: "g4_firstname", last_name: "g4_lastname", email: "g4_email", phone: "444-444-4444", address: "g4 address", details: "g4 details")
g5 = Guest.create(first_name: "g5_firstname", last_name: "g5_lastname", email: "g5_email", phone: "555-555-5555", address: "g5 address", details: "g5 details")

h1 = HotelRoom.create(room_name: "Room 1", description: "basic", current_price: 50.00)
h2 = HotelRoom.create(room_name: "Room 2", description: "basic", current_price: 50.00)
h3 = HotelRoom.create(room_name: "Room 3", description: "basic", current_price: 50.00)
h4 = HotelRoom.create(room_name: "Room 4", description: "basic", current_price: 50.00)
h5 = HotelRoom.create(room_name: "Room 5", description: "basic", current_price: 50.00)
h6 = HotelRoom.create(room_name: "Room 6", description: "luxury", current_price: 100.00)
h7 = HotelRoom.create(room_name: "Room 7", description: "luxury", current_price: 100.00)
h8 = HotelRoom.create(room_name: "Room 8", description: "luxury", current_price: 100.00)
h9 = HotelRoom.create(room_name: "Room 9", description: "luxury", current_price: 100.00)
h10 = HotelRoom.create(room_name: "Room 10", description: "luxury", current_price: 100.00)
