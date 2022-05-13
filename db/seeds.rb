puts "🌙 Seeding data..."

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

r1 = Reservation.create(guest_id: g1.id, start_date: "2022-05-13 01:00:00", end_date: "2022-05-13 01:00:00", total_price: h1.current_price + 10)
r2 = Reservation.create(guest_id: g2.id, start_date: "2022-05-14 01:00:00", end_date: "2022-05-15 01:00:00", total_price: h2.current_price + 15)
r3 = Reservation.create(guest_id: g3.id, start_date: "2022-05-15 01:00:00", end_date: "2022-05-16 01:00:00", total_price: h6.current_price + 110)
r4 = Reservation.create(guest_id: g4.id, start_date: "2022-05-16 01:00:00", end_date: "2022-05-17 01:00:00", total_price: h7.current_price + 20)
r5 = Reservation.create(guest_id: g5.id, start_date: "2022-05-17 01:00:00", end_date: "2022-05-23 01:00:00", total_price: h8.current_price + 40)

puts "🌙 Done seeding!"
