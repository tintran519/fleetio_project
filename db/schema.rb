# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_07_094459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "vehicle_favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "vehicle_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id", "vehicle_id"], name: "index_vehicle_favorites_on_user_id_and_vehicle_id", unique: true
  end

  create_table "vehicles", force: :cascade do |t|
    t.string "name", default: ""
    t.string "color", default: ""
    t.string "image_url", default: ""
    t.string "model", default: ""
    t.string "make", default: ""
    t.string "license_plate", default: ""
    t.string "vin", default: "", null: false
    t.integer "fuel_efficiency", default: 0
    t.integer "year", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["vin"], name: "index_vehicles_on_vin", unique: true
  end

end
