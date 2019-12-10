class CreateVehicles < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicles do |t|
      t.string  :name,            default: ""
      t.string  :color,           default: ""
      t.string  :image_url,       default: ""
      t.string  :model,           default: ""
      t.string  :make,            default: ""
      t.string  :license_plate,   default: ""
      t.string  :vin,             null: false, default: ""
      t.integer :fuel_efficiency, default: 0
      t.integer :year,            default: 0

      t.timestamps null: false
    end

    add_index :vehicles, :vin, unique: true
  end
end
