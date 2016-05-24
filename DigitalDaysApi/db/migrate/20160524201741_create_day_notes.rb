class CreateDayNotes < ActiveRecord::Migration
  def change
    create_table :day_notes do |t|

      t.timestamps null: false
    end
  end
end
