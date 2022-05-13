class ReservationsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    user = User.find_by(id: params[:guest_id])
    if user
      @reservations = user.reservations.order(:date)
    else
      render json: ["No User"], status: :not_found
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
    render json: @reservation
  end

  def create
    reservation = Reservation.create!(reservation_params)
    render json: reservation, status: :created
  end

  private

  def reservation_params
    params.permit(:guest_id, :room_id, :start_date, :end_date, :price)
  end

  def render_not_found_response
    render json: { error: "Reservation not found." }, status: :not_found
  end
end
