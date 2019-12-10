class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable

  has_many :vehicle_favorites
  has_many :vehicles, :through => :vehicle_favorites
end
