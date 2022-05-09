class Reservation < ApplicationRecord
  has_many :reserved_rooms
  has_many :guest_invoices
  belongs_to :guest
end
