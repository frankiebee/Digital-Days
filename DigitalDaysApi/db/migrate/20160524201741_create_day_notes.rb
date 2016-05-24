class CreateDayNotes < ActiveRecord::Migration
  def change
    create_table :day_notes do |t|
      t.integer :user_id
      t.string :entry

      t.timestamps null: false
    end
  end
end
