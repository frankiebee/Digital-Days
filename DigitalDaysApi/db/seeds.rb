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
3.times do
  updates = rand(6..12)
  time_of_day = 10

  updates.times do
   weather = rand(65..75)
    DayDatum.create({
      user_id: user,
      weather: "#{weather}˚",
      feeling: rand(-5..5),
      food_eaten: "food",
      productivity: rand(-5..5),
      note: "I am a note :)",
      test_time: Time.new(2016, 5, Time.now.day, time_of_day)
    })
    time_of_day += 1
  end

  DayNote.create(user_id: user, test_time: Time.new(2016, 5, Time.now.day, time_of_day), entry: "Today was lovely")
  time_of_day = 10
  user += 1
end




