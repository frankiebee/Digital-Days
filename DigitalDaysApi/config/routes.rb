Rails.application.routes.draw do
  root 'user#index'

  get '/user/:id/form' => 'user#graphform'
  get '/user/session/new' => 'user#loginform'
  post '/user/login' => 'user#login'
  get '/user/show/:id' => 'user#show'
end
