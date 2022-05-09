class GuestInvoice < ApplicationRecord
  belongs_to :guest
  belongs_to :reservation
end
