class RoomSerializer < ActiveModel::Serializer
  attributes :id, :room_number, :room_type, :description, :current_price
end
