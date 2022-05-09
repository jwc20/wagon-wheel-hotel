class ReservedRoom < ApplicationRecord
  belongs_to :hotel_room
  belongs_to :reservation
end
