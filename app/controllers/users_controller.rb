class UsersController < ApplicationController
  def show
    render json: { user: current_user }
  end
end
