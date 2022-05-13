class Reservation < ApplicationRecord
  belongs_to :guest
  has_many :reserved_rooms
end
