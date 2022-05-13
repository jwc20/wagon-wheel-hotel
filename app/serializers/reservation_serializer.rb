class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :guest_id, :room_id, :start_date, :end_date, :price
end
