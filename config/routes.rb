Rails.application.routes.draw do
  devise_for :users

  root 'app#index'
  get '/favorites', to: 'app#index'

  resource :user, :only => [:show] do
    resource :user_vehicles, :only => [:create, :destroy]
  end
end
