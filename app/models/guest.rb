class Guest < ApplicationRecord
  has_many :reservations # has_one ?
  has_many :guest_invoices
end
