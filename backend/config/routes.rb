Rails.application.routes.draw do

  resources :create_likes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, param: :id

      resources :item

      get '/user_items' , to:'item#user_items'
      post '/find_item', to: 'item#find_item'
      
      post '/auth/login', to: 'auth#login'
      get '/auth/verify/:token', to: 'auth#verify' , constraints: { token: /.*/ }

      post   '/upload/user' , to: 'upload#add_avatar'
      delete '/upload/user' , to: 'upload#remove_avatar'

      get '/categories' , to: 'category#getAllCategory'

      delete '/image/:id' , to: 'image#destroy'

      # Reaction 
      get '/reaction' , to: 'reaction#index'
      post '/reaction' , to: 'reaction#add_reaction'
      delete '/reaction/:id' , to: 'reaction#remove_reaction'

      # get '/*a', to: 'application#not_found'
    end
  end
end
