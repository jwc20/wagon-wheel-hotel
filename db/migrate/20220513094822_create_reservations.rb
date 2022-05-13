class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.integer :guest_id
      t.integer :room_id
      t.datetime :start_date
      t.datetime :end_date
      t.decimal :price

      t.timestamps
    end
  end
end
