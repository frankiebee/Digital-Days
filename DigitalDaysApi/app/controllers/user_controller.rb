class UserController < ApplicationController
  def index

  end

  def loginform

  end

  def login
    @user = User.find_by(email: params[:email])
    if @user.nil?
      @errors = "The email you have entered is not registered with an account "
    elsif @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to "/user/show/#{@user.id}"
    else
      @errors = "The password you have entered does not match this account"
    end
  end

  def show
    @user = User.find(session[:user_id])
    @daydata = @user.day_data
    @daynote = @user.day_notes
  end

  def graphform

  end

  def day_data
    @user =  User.find(params[:id])
    render json: @user.day_data

  end

  def createDayDatum

  end
end
