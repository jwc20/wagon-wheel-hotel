puts "🌙 Seeding data..."

User.delete_all
Reservation.delete_all
Room.delete_all

=begin
g1 = Guest.create(first_name: "g1_firstname", last_name: "g1_lastname", email: "g1_email", phone: "111-111-1111", address: "g1 address", details: "g1 details")
g2 = Guest.create(first_name: "g2_firstname", last_name: "g2_lastname", email: "g2_email", phone: "222-222-2222", address: "g2 address", details: "g2 details")
g3 = Guest.create(first_name: "g3_firstname", last_name: "g3_lastname", email: "g3_email", phone: "333-333-3333", address: "g3 address", details: "g3 details")
g4 = Guest.create(first_name: "g4_firstname", last_name: "g4_lastname", email: "g4_email", phone: "444-444-4444", address: "g4 address", details: "g4 details")
g5 = Guest.create(first_name: "g5_firstname", last_name: "g5_lastname", email: "g5_email", phone: "555-555-5555", address: "g5 address", details: "g5 details")
=end

u1 = User.create!(name: "u11", username: "u1", email: "1@email.com", password_digest: "password", phone: "111-111-1111", admin: false)
u2 = User.create!(name: "u22", username: "u2", email: "1@email.com", password_digest: "password", phone: "111-111-1111", admin: false)

h1 = Room.create!(room_number: 1, description: "", room_type: "basic", current_price: 50.00)
h2 = Room.create!(room_number: 2, description: "", room_type: "basic", current_price: 50.00)
h3 = Room.create!(room_number: 3, description: "", room_type: "basic", current_price: 50.00)
h4 = Room.create!(room_number: 4, description: "", room_type: "basic", current_price: 50.00)
h5 = Room.create!(room_number: 5, description: "", room_type: "basic", current_price: 50.00)
h6 = Room.create!(room_number: 6, description: "", room_type: "luxury", current_price: 100.00)
h7 = Room.create!(room_number: 7, description: "", room_type: "luxury", current_price: 100.00)
h8 = Room.create!(room_number: 8, description: "", room_type: "luxury", current_price: 100.00)
h9 = Room.create!(room_number: 9, description: "", room_type: "luxury", current_price: 100.00)
h0 = Room.create!(room_number: 0, description: "", room_type: "luxury", current_price: 100.00)

d1 = DateTime.new(2022, 1, 11)
d2 = DateTime.new(2022, 1, 12)

r1 = Reservation.create(guest_id: u1.id, room_id: h1.id, start_date: d1, end_date: d2, price: 10.00)
r2 = Reservation.create(guest_id: u2.id, room_id: h2.id, start_date: d1, end_date: d2, price: 15.00)
=begin
r3 = Reservation.create(guest_id: 3, room_id: 3, start_date: d1, end_date: d2, price: 110.00)
r4 = Reservation.create(guest_id: 4, room_id: 4, start_date: d1, end_date: d2, price: 20.00)
r5 = Reservation.create(guest_id: 5, room_id: 5, start_date: d1, end_date: d2, price: 40.00)
=end

puts "🌙 Done seeding!"
