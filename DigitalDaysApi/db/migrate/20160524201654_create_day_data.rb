class CreateDayData < ActiveRecord::Migration
  def change
    create_table :day_data do |t|
      t.integer :user_id, null: false
      t.string :weather
      t.integer :feeling
      t.string :food_eaten
      t.integer :productivity
      t.string :note

      t.timestamps null: false
    end
  end
end
