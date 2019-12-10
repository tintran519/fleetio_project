class UsersController < ApplicationController
  before_action :set_user

  def show
    render json: { user: @user }
  end

  private

  def set_user
    @user = {
      email: current_user.email,
      vehicles: current_user.vehicles
    }
  end
end
