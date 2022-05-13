class CreateHotelRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :hotel_rooms do |t|
      t.string :room_name
      t.text :description
      t.decimal :current_price

      t.timestamps
    end
  end
end
