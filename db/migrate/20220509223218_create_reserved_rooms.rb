class CreateReservedRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :reserved_rooms do |t|
      t.integer :reservation_id
      t.integer :room_id
      t.decimal :price

      t.timestamps
    end
  end
end
