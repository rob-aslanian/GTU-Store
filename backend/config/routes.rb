Rails.application.routes.draw do
  resources :items
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, param: :id

      resources :item
      
      post '/auth/login', to: 'auth#login'
      get '/auth/verify/:token', to: 'auth#verify' , constraints: { token: /.*/ }

      post   '/upload/user/:id' , to: 'upload#add_avatar'
      delete '/upload/user/:id' , to: 'upload#remove_avatar'

      get '/categories' , to: 'category#getAllCategory'

      # get '/*a', to: 'application#not_found'
    end
  end
end
