class UsersController < ApplicationController
  before_action :set_user

  def show
    render json: { user: @user }
  end

  private

  def set_user
    @user = {
      username: current_user.username,
      vehicles: current_user.vehicles
    }
  end
end
