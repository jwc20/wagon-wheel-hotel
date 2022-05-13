Rails.application.routes.draw do
  resources :rooms
  resources :users
  resources :reservations

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
end
