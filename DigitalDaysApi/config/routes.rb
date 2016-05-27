Rails.application.routes.draw do
  root 'user#index'

  get '/users/:id/form' => 'user#graphform'
  get '/users/session/new' => 'user#loginform'
  post '/users/login' => 'user#login'
  get '/users/:id' => 'user#show'

  scope "/api" do
    scope "/v1" do
      get '/users/:id/day_data' => 'user#day_data'
    end
  end
end
