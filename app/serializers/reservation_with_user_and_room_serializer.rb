class ReservationWithUserAndRoomSerializer < ActiveModel::Serializer
  attributes :id

  has_many :user
  has_many :room
end
