class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :guest_id, :start_date, :end_date, :discount_percent, :total_price
end
