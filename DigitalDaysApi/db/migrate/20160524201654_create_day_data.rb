class CreateDayData < ActiveRecord::Migration
  def change
    create_table :day_data do |t|

      t.timestamps null: false
    end
  end
end
