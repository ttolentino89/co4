Rails.application.routes.draw do
  resources :categories
  resources :items do
    resources :users
  end
  resources :items
  put '/categories/:category_id/items/:id', to: 'items#add_category'
  get '/categories/', to: 'categories#index'
  get '/categories/:id', to: 'categories#show'

#auth
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
