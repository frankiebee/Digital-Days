class CreateDayNotes < ActiveRecord::Migration
  def change
    create_table :day_notes do |t|
      t.integer :user_id
      t.string :entry
      t.datetime :test_time
      t.timestamps null: false
    end
  end
end
