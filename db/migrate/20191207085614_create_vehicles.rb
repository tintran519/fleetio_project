class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string  :color,           default: ""
      t.string  :image_url,       default: ""
      t.string  :model,           default: ""
      t.string  :make,            default: ""
      t.string  :license_plate,   default: ""
      t.string  :fuel_efficiency, default: ""
      t.string  :vin,             null: false, default: ""
      t.integer :year,            default: ""

      t.timestamps null: false
    end

    add_index :vehicles, :vin, unique: true  
  end
end
