class UserVehiclesController < ApplicationController
  def create
    vehicle = Vehicle.find_or_create_by(vin: params[:vin]) do |vehicle|
      vehicle.update(vehicle_params)
    end

    current_user.vehicles << vehicle

    render json: { vehicles: current_user.vehicles }
  end

  def destroy
    vehicle = Vehicle.find_by(vin: params[:vin])

    current_user.vehicles.delete(vehicle)

    render json: { vehicles: current_user.vehicles }
  end

  private

  def vehicle_params
    params.require(:user_vehicle).permit(
      :color,
      :name,
      :image_url,
      :model,
      :make,
      :license_plate,
      :vin,
      :year,
      :fuel_efficiency
    )
  end
end
