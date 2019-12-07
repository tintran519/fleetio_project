class Vehicle < ApplicationRecord
  has_many :vehicle_favorites
  has_many :users, :through => :vehicle_favorites
end
