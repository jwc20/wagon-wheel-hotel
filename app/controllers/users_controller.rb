class UsersController < ApplicationController
  # before_action :authorize_user, except: [:create]

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def index
    # for testing
    render json: User.all
  end

=begin
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
=end

  def show
    current_user = User.find_by(id: session[:current_user])
    render json: current_user
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :created
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:name, :username, :password, :admin, :phone, :email)
  end
end
