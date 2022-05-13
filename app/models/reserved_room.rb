class ReservedRoom < ApplicationRecord
  belongs_to :reservation
  belongs_to :hotel_room
end
