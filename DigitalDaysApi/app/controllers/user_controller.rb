class UserController < ApplicationController

  def index
    if !session[:user_id].nil?
      redirect_to "/user/show/#{session[:user_id]}"
    end
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
    @times = @daydata.pluck(:test_time)
    @daynote = @user.day_notes
    @times.map! do |t|
      hour = t.hour <= 12 ? t.hour : t.hour-12
      min = t.min < 10 ? "0#{t.min}" : t.min
      timeformat = t.hour-11 > 0 ? "#{hour}:#{min} pm" : "#{hour}:#{min} am"
      {
        human_read: t.inspect.gsub(/\d\d:\d\d:\d\d/,timeformat),
        date:"#{t.year}/#{t.month}/#{t.day}",
        year:t.year,
        month:t.month,
        day:t.day,
        time:"#{t.hour}:#{t.min}:#{t.sec}",
        zone:t.zone,
        hour: t.hour,
        min: t.min,
        sec: t.sec
      }.to_json
    end
  end

  def day_data
    @user =  User.find(params[:id])
    render json: @user.day_data

  end

  def createDayDatum

  end
end
