class RoomsController < ApplicationController
  def index
    rooms = Room.all
    render json: rooms
  end

  def show
    @room = Room.find(params[:id])
  end
end
