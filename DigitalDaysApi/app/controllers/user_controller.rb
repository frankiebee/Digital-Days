class UserController < ApplicationController
  def index
    @data = User.first.day_data.pluck("note")
  end

  def show

  end

  def graphform

  end
end
