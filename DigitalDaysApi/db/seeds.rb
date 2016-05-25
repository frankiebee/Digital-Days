# preferences contain this for now:
# weather
# feeling
# food_eaten
# productivity
# note
# 0 = false
# 1 = true
User.create({
  name: "Admin",
  email: "admin",
  password: "123",
  password_confirmation: "123",
  weather: 0,
  feeling: 0,
  food_eaten: 0,
  productivity: 0,
  notifications: 0,
  notification_times: "10:30am:6:00pm"
 })

User.create({
  name: "Test Person 1",
  email: "testperson1@email.com",
  password: "123",
  password_confirmation: "123",
  weather: 1,
  feeling: 0,
  food_eaten: 1,
  productivity: 0,
  notifications: 0,
  notification_times: "10:30am:6:00pm"
 })

User.create({
  name: "Test person 2",
  email: "testperson2@email.com",
  password: "123",
  password_confirmation: "123",
  weather: 0,
  feeling: 0,
  food_eaten: 0,
  productivity: 1,
  notifications: 0,
  notification_times: "10:30-18:00"
 })

user = 1
month = Time.now.month
day = 1
year = Time.now.year - 1
Time.new(Time.now.year-1,Time.now.month,Time.now.day).upto(Time.now)
  puts "#{month == Time.now.month}  #{year == Time.now.year} #{day == Time.now.day + 1}"
  puts "#{year}/#{month}/#{day}"
  begin
     t = Time.new(year, month, day)
  rescue
    month += 1
    day = 1

  end
  3.times do
    time_of_day = 10
    updates = rand(6..12)

    updates.times do
     weather = rand(65..75)
      DayDatum.create({
        user_id: user,
        weather: "#{weather}˚",
        feeling: rand(-5..5),
        food_eaten: "food",
        productivity: rand(-5..5),
        note: "I am a note :)",
        test_time: Time.new(2016, month, day, time_of_day)
      })
      time_of_day += 1
    end

    DayNote.create(user_id: user, test_time: t, entry: "Today was lovely")
    user += 1
  end
  day += 1
  if month == 12 && day == 32
    year += 1
    month = 1
    day = 1
  end
end





