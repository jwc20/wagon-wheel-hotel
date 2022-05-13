class CreateGuestInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :guest_invoices do |t|
      t.integer :guest_id
      t.integer :reservation_id
      t.decimal :invoice_amount
      t.timestamp :ts_issued
      t.timestamp :ts_paid
      t.timestamp :ts_canceled

      t.timestamps
    end
  end
end
