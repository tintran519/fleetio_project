class CreateVehicleFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :vehicle_favorites do |t|
      t.integer  :user_id, null: false
      t.integer  :vehicle_id, null: false

      t.timestamps null: false
    end

    add_index :vehicle_favorites, [:user_id, :vehicle_id], unique: true  
  end
end
