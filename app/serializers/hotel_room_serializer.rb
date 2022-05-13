class HotelRoomSerializer < ActiveModel::Serializer
  attributes :id, :room_name, :description, :current_price
end
