Rails.application.routes.draw do
  devise_for :users

  root 'app#index'

  resource :user, :only => [:show]
  resource :vehicle, :only => [:create]
end
