class Guest < ApplicationRecord
  belongs_to :user
  has_many :reservations
  has_many :guest_invoices
end
