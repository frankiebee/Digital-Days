class User < ActiveRecord::Base
  has_secure_password

  validates_uniqueness_of :email
  has_many :day_notes
  has_many :day_data

end
