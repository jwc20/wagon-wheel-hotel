class GuestInvoiceSerializer < ActiveModel::Serializer
  attributes :id, :guest_id, :reservation_id, :invoice_amount, :ts_issued, :ts_paid, :ts_canceled
end
