class ReservedRoomSerializer < ActiveModel::Serializer
  attributes :id, :reservation_id, :room_id, :price
end
