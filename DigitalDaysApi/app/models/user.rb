class User < ActiveRecord::Base
  has_secure_password

  validates :email, uniqueness: true

  has_many :day_notes
  has_many :day_data

end
