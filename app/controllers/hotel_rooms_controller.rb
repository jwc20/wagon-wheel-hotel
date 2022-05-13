class HotelRoomsController < ApplicationController
  def index
    rooms = HotelRoom.all
    render json: rooms
  end
end
