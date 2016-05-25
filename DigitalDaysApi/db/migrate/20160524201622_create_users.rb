class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email, null: false
      t.string :password_digest, null: false
      t.integer :weather
      t.integer :feeling
      t.integer :food_eaten
      t.integer :productivity
      t.integer :notifications
      t.string :notification_times
      t.timestamps null: false
    end
  end
end
